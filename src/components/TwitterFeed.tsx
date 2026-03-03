'use client';

import { PROJECT } from '@/lib/constants';

const MOCK_TWEETS = [
  { text: 'CALL // 5/6 agents signal. Shield entry queued. Awaiting execution.', time: '2h ago' },
  { text: 'SENTINEL: Whale accumulation detected. 12k SOL moved to cold storage.', time: '5h ago' },
  { text: 'RADAR: New token passed filters. Liquidity threshold met. Flagging for review.', time: '8h ago' },
  { text: 'CORE: Shield purchased. Position open. Tweet posted.', time: '12h ago' },
  { text: 'LENS: Support level holding. Volume declining. No new signal.', time: '1d ago' },
];

export default function TwitterFeed() {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Live Feed
        </span>
        <a
          href={PROJECT.twitter}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '0.7rem', color: 'var(--neon-bright)' }}
        >
          @aegis6agents ↗
        </a>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {MOCK_TWEETS.map((t, i) => (
          <div
            key={i}
            className="agent-card"
            style={{
              padding: '1rem',
              borderLeft: '3px solid var(--neon)',
            }}
          >
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>{t.text}</p>
            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{t.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
