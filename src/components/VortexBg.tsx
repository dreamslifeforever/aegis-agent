'use client';

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 600;
const ARMS = 3;

interface Particle {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  brightness: number;
  armOffset: number;
}

export default function VortexBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let animId = 0;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = rect?.width || window.innerWidth;
      h = rect?.height || 600;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const arm = i % ARMS;
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * Math.min(w, h) * 0.45,
        speed: 0.001 + Math.random() * 0.003,
        size: 0.5 + Math.random() * 2,
        brightness: 0.3 + Math.random() * 0.7,
        armOffset: (arm / ARMS) * Math.PI * 2,
      });
    }

    let globalAngle = 0;

    const draw = () => {
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      globalAngle += 0.002;

      for (const p of particles) {
        p.angle += p.speed;

        const spiralTwist = p.radius * 0.008;
        const a = p.angle + p.armOffset + spiralTwist + globalAngle;
        const wobble = Math.sin(p.angle * 3) * p.radius * 0.05;
        const r = p.radius + wobble;

        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r * 0.6;

        const distFade = 1 - (p.radius / (Math.min(w, h) * 0.45));
        const alpha = p.brightness * (0.3 + distFade * 0.7);

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 20, 147, ${alpha})`;
        ctx.fill();

        if (p.size > 1.2 && alpha > 0.5) {
          ctx.beginPath();
          ctx.arc(x, y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 20, 147, ${alpha * 0.1})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
}
