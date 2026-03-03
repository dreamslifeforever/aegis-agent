import { AGENTS } from '@/lib/constants';

export default function AgentsPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          The Collective
        </div>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--neon-bright)', letterSpacing: '0.1em' }}>
          Six Agents
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '0.75rem', maxWidth: '36rem', margin: '0.75rem auto 0', lineHeight: 1.6 }}>
          Each agent has a distinct research task. Together they cover on-chain flow, sentiment, technicals, new tokens, and historical patterns. The core executes when consensus is reached.
        </p>
      </div>

      <div className="neon-line" style={{ marginBottom: '2rem' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {AGENTS.map((a) => (
          <div key={a.id} className="agent-card" style={{ position: 'relative', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: '2px solid var(--neon)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--neon-bright)',
                  flexShrink: 0,
                }}
              >
                {a.id}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--neon-bright)', letterSpacing: '0.1em' }}>
                  {a.name}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--neon)', letterSpacing: '0.05em', marginTop: '0.2rem' }}>
                  {a.role}
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
              {a.task}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
