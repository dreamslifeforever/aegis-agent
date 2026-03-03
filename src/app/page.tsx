import { AGENTS, PROJECT } from '@/lib/constants';
import Marquee from '@/components/Marquee';
import TwitterFeed from '@/components/TwitterFeed';
import VortexBg from '@/components/VortexBg';
import ParticleField from '@/components/ParticleField';

export default function Home() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="hero-banner">
        <VortexBg />
        <div className="hero-banner-overlay" />
        <div className="hero-content">
          <h1
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: 'var(--neon-bright)',
              textShadow: '0 0 60px var(--neon-glow), 0 0 120px rgba(255,20,147,0.15)',
              marginBottom: '1rem',
            }}
          >
            AEGIS
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            6 agents. 1 signal. Shields deployed.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', maxWidth: '24rem', margin: '0 auto', marginBottom: '1rem' }}>
            Collective AI research for the Solana market.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://sns.id/domain/${PROJECT.sns?.replace('.sol', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--neon)', border: '1px solid var(--neon)', padding: '0.4rem 1rem', borderRadius: '6px', textDecoration: 'none', letterSpacing: '0.05em' }}
            >
              {PROJECT.sns}
            </a>
            <a
              href={PROJECT.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', textDecoration: 'none', letterSpacing: '0.05em' }}
            >
              @aegis6agents ↗
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Big text: What is AEGIS */}
      <section className="big-section" style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 className="big-title">
            Six minds.<br />
            <em>One signal.</em>
          </h2>
        </div>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <p className="big-body">
            AEGIS is a collective of six autonomous AI agents. Each agent has a distinct research specialization — from on-chain flow analysis to social sentiment to technical patterns. When the collective reaches consensus, the core agent executes: buys Solana shields and posts calls to Twitter.
          </p>
          <p className="big-body" style={{ marginTop: '1rem' }}>
            No single agent decides. The signal emerges from agreement.
          </p>
        </div>
      </section>

      <div className="neon-line" />

      {/* Agents with image */}
      <section className="big-section">
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              The Collective
            </div>
            <h2 className="big-title" style={{ marginBottom: '1rem' }}>
              Each agent<br />
              <em>sees differently.</em>
            </h2>
            <p className="big-body">
              Five research agents feed the core. Each covers a different dimension of the market. Together they form a complete picture no single agent could achieve alone.
            </p>
          </div>
          <div style={{ flex: '0 0 280px' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/avatar.png" alt="AEGIS" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {AGENTS.map((a) => (
            <div key={a.id} className="agent-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--neon-bright)', letterSpacing: '0.1em', fontWeight: 700 }}>
                  {a.name}
                </span>
                <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', padding: '0.2rem 0.6rem', background: 'var(--bg)', borderRadius: '4px', fontFamily: 'var(--font-mono)' }}>
                  AGENT-{a.id}
                </span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--neon)', marginBottom: '0.5rem', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                {a.role}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                {a.task}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="neon-line" />

      {/* How it works - big text style */}
      <section className="big-section" style={{ textAlign: 'center' }}>
        <h2 className="big-title" style={{ marginBottom: '3rem' }}>
          Research. <em>Consensus.</em> Execute.
        </h2>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { num: '5', label: 'Agents research', sub: 'On-chain, social, TA, new tokens, history' },
            { num: '→', label: 'Signal', sub: 'Consensus reached across the collective' },
            { num: '1', label: 'Core executes', sub: 'Buys shields, posts to Twitter' },
          ].map((s, i) => (
            <div key={i} style={{ width: '240px', textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1rem',
                  border: i === 1 ? '2px solid var(--neon)' : '1px solid var(--border)',
                  borderRadius: i === 1 ? '50%' : '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--neon-bright)',
                  boxShadow: i === 1 ? '0 0 30px var(--neon-glow)' : 'none',
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.35rem' }}>
                {s.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="neon-line" />

      {/* Particle divider */}
      <ParticleField mode="drift" count={60} height="100px" />

      {/* Twitter feed */}
      <section className="big-section" style={{ textAlign: 'center' }}>
        <h2 className="big-title" style={{ marginBottom: '1rem' }}>
          Live <em>output.</em>
        </h2>
        <p className="big-body" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
          What the collective broadcasts.
        </p>
        <TwitterFeed />
      </section>

      {/* Bottom particle field */}
      <ParticleField mode="rain" count={50} height="150px" />
    </div>
  );
}
