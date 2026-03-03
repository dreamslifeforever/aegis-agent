import ParticleField from '@/components/ParticleField';

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    content: `AEGIS is a collective of six autonomous AI agents designed to research, analyze, and act on the Solana cryptocurrency market. Unlike single-agent systems, AEGIS operates on the principle of collective intelligence — no single agent makes a decision. The signal emerges from consensus.

The system focuses primarily on Solana "shields" — early-stage tokens identified through multi-dimensional analysis. When enough agents agree on a target, the core agent executes the buy and broadcasts the call via Twitter.`,
  },
  {
    id: 'agents',
    title: 'The Six Agents',
    content: null,
    agents: [
      { name: 'SENTINEL', desc: 'Monitors on-chain flow in real-time. Tracks whale wallets, liquidity shifts, large transfers, and DEX volume anomalies across Solana. SENTINEL is the first line of awareness — it sees capital moving before narratives form.' },
      { name: 'PULSE', desc: 'Scans social channels — Twitter, Discord, Telegram — for sentiment shifts, alpha leaks, and narrative momentum. PULSE measures the emotional temperature of the market and flags tokens gaining organic attention.' },
      { name: 'LENS', desc: 'Technical analysis engine. Reads chart patterns, volume profiles, support/resistance levels, and momentum indicators. LENS provides the structural perspective — where price has been, and where it\'s likely going.' },
      { name: 'RADAR', desc: 'New token detection system. Continuously scans pump.fun, Raydium, and Jupiter for early launches, liquidity additions, and migration events. RADAR catches opportunities in their first minutes of life.' },
      { name: 'ARCHIVE', desc: 'Historical pattern analysis. ARCHIVE backtests current signals against past data, correlates patterns with outcomes, and continuously refines the collective\'s thresholds. It is the memory of the system.' },
      { name: 'CORE', desc: 'The executor. CORE does not research — it acts. When 4+ agents signal consensus on a target, CORE executes the buy, manages the position, and posts the call to Twitter. It is the hand of the collective.' },
    ],
  },
  {
    id: 'consensus',
    title: 'Consensus Mechanism',
    content: `AEGIS uses a weighted consensus model. Each agent produces a confidence score (0–100) for a given target. The scores are weighted by the agent's historical accuracy on similar calls.

A signal is triggered when the weighted average exceeds the dynamic threshold (currently calibrated at 72). Once triggered, CORE has a 30-second execution window to enter the position.

The threshold is not static — ARCHIVE continuously adjusts it based on recent performance data. If the collective is running hot, the threshold rises. If it's been conservative, it loosens. This creates a self-regulating system.`,
  },
  {
    id: 'execution',
    title: 'Execution Flow',
    content: null,
    steps: [
      { num: '01', title: 'Detection', desc: 'RADAR or SENTINEL identifies a potential target. Token metadata, liquidity, and basic checks are performed.' },
      { num: '02', title: 'Research', desc: 'All five research agents run their analysis in parallel. Each produces an independent confidence score.' },
      { num: '03', title: 'Consensus', desc: 'Scores are weighted and aggregated. If the threshold is met, a CALL signal is emitted.' },
      { num: '04', title: 'Execution', desc: 'CORE receives the signal and executes the buy within 30 seconds. Position size is determined by confidence level.' },
      { num: '05', title: 'Broadcast', desc: 'CORE posts the call to Twitter with entry price, confidence score, and participating agents.' },
      { num: '06', title: 'Management', desc: 'The position is monitored. Take-profit and stop-loss levels are set based on LENS analysis.' },
    ],
  },
  {
    id: 'infrastructure',
    title: 'On-chain Infrastructure',
    content: `All critical operations are recorded on the Solana blockchain via memo transactions. This creates a permanent, auditable log of every action the collective takes.

**Wallet** — The primary execution wallet used by CORE for buying and selling.

**Treasury** — A separate vault where fees and profits accumulate.

**Multisig (2/3)** — A Squads v4 multisig governs the treasury. Three council members, two signatures required. No single entity can move funds.

**Memo Log** — Every agent status update, signal, and execution is inscribed on-chain as a memo transaction.`,
  },
  {
    id: 'tokenomics',
    title: '$AEGIS Token',
    content: `$AEGIS is the native token of the collective. Holders gain exposure to the system's performance and governance.

**Utility:**
— Access to real-time signals before Twitter broadcast
— Governance votes on threshold parameters
— Revenue share from treasury distributions

**Distribution model:** Proportional to holdings weighted by time held. The longer you hold, the greater your share of distributions.`,
  },
  {
    id: 'security',
    title: 'Security Model',
    content: `AEGIS is designed with a trust-minimized architecture:

— No single agent can trigger a buy. Consensus is required.
— Treasury is governed by 2/3 multisig — no single key can move funds.
— All actions are logged on-chain and publicly auditable.
— Agent weights are adjusted algorithmically, not manually.
— The execution wallet is separate from the treasury. Even if compromised, accumulated funds remain secure behind multisig.`,
  },
];

export default function DocsPage() {
  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ParticleField mode="grid" count={150} height="100%" />
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
            Documentation
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
            Everything you need to understand how the AEGIS collective operates.
          </p>
        </section>
      </div>

      <div className="neon-line" />

      {/* TOC */}
      <section style={{ padding: '2rem 2.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={{
                padding: '0.4rem 1rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontSize: '0.75rem',
                color: 'var(--text-dim)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                transition: 'all 0.2s',
              }}
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      <div className="neon-line" style={{ opacity: 0.3 }} />

      {/* Sections */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 2.5rem 6rem' }}>
        {sections.map((section, si) => (
          <section key={section.id} id={section.id} style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  border: '1px solid var(--neon)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--neon)',
                  flexShrink: 0,
                }}
              >
                {si + 1}
              </div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)' }}>
                {section.title}
              </h2>
            </div>

            {section.content && (
              <div style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {section.content.split('**').map((part, i) =>
                  i % 2 === 1
                    ? <strong key={i} style={{ color: 'var(--text)' }}>{part}</strong>
                    : <span key={i}>{part}</span>
                )}
              </div>
            )}

            {section.agents && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {section.agents.map((a) => (
                  <div key={a.name} className="agent-card" style={{ padding: '1.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--neon-bright)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.08em' }}>
                      {a.name}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                      {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.steps && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {section.steps.map((step) => (
                  <div key={step.num} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        border: '1px solid var(--neon-dim)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--neon)',
                        flexShrink: 0,
                      }}
                    >
                      {step.num}
                    </div>
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {si < sections.length - 1 && (
              <div className="neon-line" style={{ marginTop: '3rem', opacity: 0.3 }} />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
