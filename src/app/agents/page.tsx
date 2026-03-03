import { AGENTS } from '@/lib/constants';
import ParticleField from '@/components/ParticleField';

export default function AgentsPage() {
  return (
    <div>
      {/* Hero with particles */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ParticleField mode="drift" count={120} height="100%" />
        </div>
        <section style={{ position: 'relative', zIndex: 1, padding: '6rem 2.5rem 4rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text)',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Six agents.<br />
            <span style={{ color: 'var(--neon-bright)' }}>Six perspectives.</span>
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
            Each agent covers a distinct dimension of the market. Together they form a complete research apparatus no single model could replicate.
          </p>
        </section>
      </div>

      <div className="neon-line" />

      <section style={{ padding: '4rem 2.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {AGENTS.map((a) => (
            <div key={a.id} className="agent-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  border: '2px solid var(--neon)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--neon-bright)',
                  flexShrink: 0,
                  boxShadow: '0 0 15px var(--neon-glow)',
                }}
              >
                {a.id}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--neon-bright)', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {a.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--neon)', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                  {a.role}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                  {a.task}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Particle divider */}
      <ParticleField mode="wave" count={60} height="120px" />
    </div>
  );
}
