import { PROJECT, MEMO_LOGS, COUNCIL } from '@/lib/constants';
import ParticleField from '@/components/ParticleField';

export default function CorePage() {
  return (
    <div>
      {/* Hero with rain particles */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ParticleField mode="rain" count={100} height="100%" />
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
          The engine<br />
          <span style={{ color: 'var(--neon-bright)' }}>behind the signal.</span>
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
          On-chain infrastructure powering the AEGIS collective. Wallets, governance, and a permanent log of every action.
        </p>
        </section>
      </div>

      <div className="neon-line" />

      {/* Identity */}
      <section style={{ padding: '4rem 2.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Identity
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          {[
            { label: 'SNS Domain', value: PROJECT.sns || '', desc: 'Solana Name Service', link: `https://sns.id/domain/${(PROJECT.sns || '').replace('.sol', '')}` },
            { label: 'Agent Wallet', value: PROJECT.wallet, desc: 'Primary execution wallet' },
            { label: 'Treasury', value: PROJECT.treasury, desc: 'Collective treasury vault' },
            { label: 'Multisig (2/3)', value: PROJECT.multisig, desc: 'Council-governed multisig' },
          ].map((item, i) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.5rem 2rem',
                background: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-elevated)',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.2rem' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{item.desc}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: item.value ? 'var(--neon-bright)' : 'var(--text-muted)', wordBreak: 'break-all', textAlign: 'right', maxWidth: '400px' }}>
                {item.value ? (
                  <a
                    href={(item as any).link || `https://solscan.io/account/${item.value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--neon-bright)', textDecoration: 'none' }}
                  >
                    {item.value}
                  </a>
                ) : 'Pending deployment...'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Governance */}
      <section style={{ padding: '0 2.5rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Governance
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {COUNCIL.map((c, i) => (
            <div
              key={c.name}
              style={{
                flex: '1 1 200px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    border: '1px solid var(--neon)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                    color: 'var(--neon)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {i + 1}
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>{c.name}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: c.address ? 'var(--text-dim)' : 'var(--text-muted)', wordBreak: 'break-all' }}>
                {c.address || 'Pending...'}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="neon-line" />

      {/* Memo log */}
      <section style={{ padding: '4rem 2.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            On-chain Log
          </div>
          <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>
            {MEMO_LOGS.length} entries
          </div>
        </div>

        {MEMO_LOGS.length === 0 ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              // awaiting deployment
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {MEMO_LOGS.map((m, i) => (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1rem 1.5rem',
                  background: i % 2 === 0 ? 'var(--bg-card)' : 'transparent',
                  borderRadius: '8px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--neon)', width: '40px', flexShrink: 0 }}>
                  {m.id}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {m.content}
                </span>
                <a
                  href={`https://solscan.io/tx/${m.signature}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--neon-bright)', whiteSpace: 'nowrap' }}
                >
                  {m.signature.slice(0, 6)}...↗
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
