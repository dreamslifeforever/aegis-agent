import { PROJECT, MEMO_LOGS, COUNCIL } from '@/lib/constants';

export default function CorePage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Execution
        </div>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--neon-bright)', letterSpacing: '0.1em' }}>
          Core
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '0.75rem', lineHeight: 1.6 }}>
          Receives signals from all agents. Buys shields when consensus is reached. Posts calls to Twitter.
        </p>
      </div>

      <div className="neon-line" style={{ marginBottom: '2rem' }} />

      {/* Addresses */}
      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { label: 'Wallet', value: PROJECT.wallet },
          { label: 'Treasury', value: PROJECT.treasury },
          { label: 'Multisig', value: PROJECT.multisig },
        ].map((item) => (
          <div key={item.label} className="agent-card" style={{ padding: '1.25rem' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              {item.label}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: item.value ? 'var(--neon-bright)' : 'var(--text-muted)', wordBreak: 'break-all' }}>
              {item.value || 'Pending...'}
            </div>
          </div>
        ))}
      </div>

      {/* Council */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          Council
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          {COUNCIL.map((c) => (
            <div key={c.name} className="agent-card" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>{c.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: c.address ? 'var(--text-dim)' : 'var(--text-muted)', wordBreak: 'break-all' }}>
                {c.address || 'Pending...'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Memo log */}
      <div>
        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
          Memo Log
        </h3>
        {MEMO_LOGS.length === 0 ? (
          <div className="agent-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              On-chain memos will appear here after deployment.
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {MEMO_LOGS.map((m) => (
              <div key={m.id} className="agent-card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--neon)' }}>{m.id}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, margin: '0 1rem' }}>{m.content}</span>
                <a href={`https://solscan.io/tx/${m.signature}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.6rem', color: 'var(--neon)' }}>Solscan ↗</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
