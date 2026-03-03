'use client';

import { useEffect, useRef } from 'react';

type Mode = 'drift' | 'rain' | 'wave' | 'grid';

interface Props {
  mode?: Mode;
  count?: number;
  height?: string;
}

export default function ParticleField({ mode = 'drift', count = 80, height = '300px' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0, animId = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = rect?.width || window.innerWidth;
      h = rect?.height || 300;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 2000,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: 0.5 + Math.random() * 1.5,
      alpha: 0.2 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.01;

      for (const p of particles) {
        let x = 0, y = 0;

        if (mode === 'drift') {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;
          x = p.x;
          y = p.y;
        } else if (mode === 'rain') {
          p.y += 0.3 + p.size * 0.3;
          if (p.y > h) { p.y = -5; p.x = Math.random() * w; }
          x = p.x % w;
          y = p.y;
        } else if (mode === 'wave') {
          p.x += 0.3;
          if (p.x > w) p.x = 0;
          x = p.x % w;
          y = (p.y % h) + Math.sin(t * 2 + p.phase + p.x * 0.01) * 20;
        } else if (mode === 'grid') {
          x = p.x % w;
          y = p.y % h;
          const pulse = Math.sin(t * 3 + p.phase) * 0.3 + 0.7;
          p.alpha = 0.15 * pulse;
        }

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 20, 147, ${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, [mode, count]);

  return (
    <div style={{ position: 'relative', width: '100%', height, overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />
    </div>
  );
}
