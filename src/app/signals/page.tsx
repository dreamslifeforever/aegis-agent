import ParticleField from '@/components/ParticleField';

const SIGNALS = [
  { id: 'SIG-001', time: '2m ago', token: '$ONE', mint: 'GMD16hpoKqfpXpPTWoymvzjddsruQsdqPu8T28ZKpump', confidence: 84, agents: ['SENTINEL', 'PULSE', 'RADAR', 'LENS', 'ARCHIVE'], status: 'EXECUTING' },
  { id: 'SIG-002', time: '14m ago', token: '$NOBRAINER', mint: '4AaQh4GhzNWMtDt3BpNhKf1BiH784pkoh5P3KeMupump', confidence: 79, agents: ['PULSE', 'RADAR', 'LENS', 'ARCHIVE'], status: 'FILLED' },
  { id: 'SIG-003', time: '1h ago', token: '$MICHITARI', mint: '6HnKdQHDms3Agys7nisk9SX3Q1fftZ2HuaALz9KYpump', confidence: 72, agents: ['SENTINEL', 'RADAR', 'ARCHIVE', 'LENS'], status: 'FILLED' },
  { id: 'SIG-004', time: '3h ago', token: '$NOBRAINER', mint: '4AaQh4GhzNWMtDt3BpNhKf1BiH784pkoh5P3KeMupump', confidence: 88, agents: ['SENTINEL', 'PULSE', 'LENS', 'ARCHIVE', 'RADAR'], status: 'CLOSED +34.1%' },
  { id: 'SIG-005', time: '5h ago', token: '$GEN', mint: '7uerT1tMCury3t6HHhAMbBmq7t75dP9H4T9ug8AKpump', confidence: 71, agents: ['PULSE', 'RADAR', 'ARCHIVE'], status: 'CLOSED -15.7%' },
  { id: 'SIG-006', time: '8h ago', token: '$PIZZA', mint: 'G9ivB7K41a4G8m1k4QdxxN4L5eGKL7Mr12S26B85pump', confidence: 76, agents: ['SENTINEL', 'PULSE', 'RADAR', 'LENS'], status: 'CLOSED -22.5%' },
  { id: 'SIG-007', time: '12h ago', token: '$420', mint: '8XTMmpoNqyg85qqR7Ca4hKyHsDy7YceTvkHNC7Snpump', confidence: 69, agents: ['SENTINEL', 'LENS', 'ARCHIVE', 'RADAR'], status: 'CLOSED +8.2%' },
  { id: 'SIG-008', time: '1d ago', token: '$ADHD', mint: '84ZrYATgJAJFs8k4q2PDcHjc9FvEi4C42NCyg11Upump', confidence: 65, agents: ['PULSE', 'RADAR'], status: 'REJECTED' },
  { id: 'SIG-009', time: '1d ago', token: '$LIBERTY', mint: 'buZEcf51e2tD4goTbb9mFZ1567jpC6aYu7if1TTpump', confidence: 73, agents: ['SENTINEL', 'PULSE', 'ARCHIVE'], status: 'CLOSED +4.6%' },
  { id: 'SIG-010', time: '1d ago', token: '$PIKE', mint: 'A6Xg3DPFHQMGwMkQE6g7MvWbh9bZXUP6FW3F3NNWpump', confidence: 67, agents: ['RADAR', 'LENS'], status: 'REJECTED' },
];

function ConfidenceBar({ value }: { value: number }) {
  return (
    <div style={{ width: '60px', height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
      <div
        style={{
          width: `${value}%`,
          height: '100%',
          background: value >= 80 ? 'var(--neon)' : value >= 70 ? 'var(--neon-dim)' : 'var(--text-muted)',
          borderRadius: '2px',
        }}
      />
    </div>
  );
}

export default function SignalsPage() {
  return (
    <div>
      {/* Hero with wave particles */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ParticleField mode="wave" count={100} height="100%" />
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
            Signal <span style={{ color: 'var(--neon-bright)' }}>feed.</span>
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
            Real-time consensus signals from the collective.
          </p>
        </section>
      </div>

      <div className="neon-line" />

      {/* Stats */}
      <section style={{ padding: '2rem 2.5rem', maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { label: 'Total Signals', value: '10' },
          { label: 'Win Rate', value: '50%' },
          { label: 'Avg Confidence', value: '74.4' },
          { label: 'Best', value: '+34.1%' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--neon-bright)' }}>{s.value}</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </section>

      <div className="neon-line" style={{ opacity: 0.3 }} />

      {/* Signals table */}
      <section style={{ padding: '2rem 2.5rem 6rem', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '80px 60px 1fr 80px 2fr 120px',
            gap: '1rem',
            padding: '0.75rem 1.5rem',
            fontSize: '0.6rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <span>Signal</span>
          <span>Time</span>
          <span>Token</span>
          <span>Score</span>
          <span>Agents</span>
          <span>Status</span>
        </div>

        {/* Rows */}
        {SIGNALS.map((sig, i) => (
          <div
            key={sig.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 60px 1fr 80px 2fr 120px',
              gap: '1rem',
              padding: '1rem 1.5rem',
              alignItems: 'center',
              background: i % 2 === 0 ? 'var(--bg-card)' : 'transparent',
              borderRadius: '6px',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--neon)' }}>
              {sig.id}
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              {sig.time}
            </span>
            {sig.mint ? (
              <a
                href={`https://pump.fun/coin/${sig.mint}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--neon-bright)', fontWeight: 600, textDecoration: 'none' }}
              >
                {sig.token} ↗
              </a>
            ) : (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                {sig.token}
              </span>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: sig.confidence >= 80 ? 'var(--neon-bright)' : 'var(--text-dim)' }}>
                {sig.confidence}
              </span>
              <ConfidenceBar value={sig.confidence} />
            </div>
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              {sig.agents.map((a) => (
                <span
                  key={a}
                  style={{
                    fontSize: '0.55rem',
                    padding: '0.15rem 0.4rem',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    borderRadius: '3px',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
            <span
              style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-mono)',
                color:
                  sig.status === 'EXECUTING' ? 'var(--neon)' :
                  sig.status.includes('+') ? '#4ade80' :
                  sig.status.includes('-') ? '#f87171' :
                  sig.status === 'REJECTED' ? 'var(--text-muted)' : 'var(--text-dim)',
              }}
            >
              {sig.status}
            </span>
          </div>
        ))}
      </section>
    </div>
  );
}
