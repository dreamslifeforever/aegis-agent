import Link from 'next/link';
import { AGENTS } from '@/lib/constants';
import TwitterFeed from '@/components/TwitterFeed';

export default function Home() {
  return (
    <div>
      {/* Hero - full width */}
      <section className="hero-neon">
        <h1
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'var(--neon-bright)',
            marginBottom: '1rem',
            textShadow: '0 0 40px var(--neon-glow)',
          }}
        >
          AEGIS
        </h1>
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-dim)',
            maxWidth: '32rem',
            margin: '0 auto 0.5rem',
            lineHeight: 1.6,
          }}
        >
          6 agents. 1 signal. Shields deployed.
        </p>
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            maxWidth: '28rem',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Six AI agents analyze the entire crypto market — Solana first. Each has a distinct research task. When the collective signals a call, the core buys shields and posts to Twitter.
        </p>

        {/* Hero art */}
        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid var(--neon)',
              boxShadow: '0 0 50px var(--neon-glow)',
            }}
          >
            <img
              src="/hero.png"
              alt="AEGIS"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/agents"
            style={{
              padding: '0.6rem 1.5rem',
              background: 'transparent',
              border: '1px solid var(--neon)',
              borderRadius: '6px',
              color: 'var(--neon-bright)',
              fontSize: '0.8rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'all 0.2s',
            }}
          >
            View Agents
          </Link>
          <Link
            href="/core"
            style={{
              padding: '0.6rem 1.5rem',
              background: 'var(--neon)',
              border: 'none',
              borderRadius: '6px',
              color: '#000',
              fontSize: '0.8rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
          >
            Core
          </Link>
        </div>
      </section>

      {/* 6 Agents Grid */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            The Collective
          </div>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--text)', letterSpacing: '0.1em' }}>
            Six Agents. Six Tasks.
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {AGENTS.map((a) => (
            <div key={a.id} className="agent-card" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--neon-bright)', letterSpacing: '0.1em' }}>
                  {a.name}
                </span>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', padding: '0.2rem 0.5rem', background: 'var(--bg)', borderRadius: '4px' }}>
                  #{a.id}
                </span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--neon)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                {a.role}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                {a.task}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works - neon lines diagram */}
      <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <div className="neon-line" style={{ marginBottom: '2rem' }} />
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Flow
          </div>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--text)', letterSpacing: '0.08em' }}>
            Research → Signal → Execute
          </h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ width: '60px', height: '60px', margin: '0 auto 0.5rem', border: '2px solid var(--neon)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: 'var(--neon)' }}>
              5
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Agents research</div>
          </div>
          <div style={{ width: '24px', height: '1px', background: 'var(--neon)', opacity: 0.6 }} />
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ width: '60px', height: '60px', margin: '0 auto 0.5rem', border: '2px solid var(--neon)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'var(--neon)', boxShadow: '0 0 25px var(--neon-glow)' }}>
              CALL
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Consensus</div>
          </div>
          <div style={{ width: '24px', height: '1px', background: 'var(--neon)', opacity: 0.6 }} />
          <div style={{ textAlign: 'center', padding: '1rem' }}>
            <div style={{ width: '60px', height: '60px', margin: '0 auto 0.5rem', border: '2px solid var(--neon)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'var(--neon)' }}>
              CORE
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Buys + Tweets</div>
          </div>
        </div>

        <div className="neon-line" style={{ marginTop: '2rem' }} />
      </section>

      {/* Twitter feed */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Output
          </div>
          <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--text)', letterSpacing: '0.08em' }}>
            Twitter Feed
          </h2>
        </div>
        <TwitterFeed />
      </section>

      {/* Stats bar */}
      <section style={{ padding: '2rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {[
          { label: 'Agents', value: '6' },
          { label: 'Focus', value: 'Solana' },
          { label: 'Output', value: 'Shields' },
          { label: 'Channel', value: 'Twitter' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--neon-bright)', fontWeight: 700 }}>{s.value}</div>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
