'use client';

const items = [
  'SENTINEL', 'PULSE', 'LENS', 'RADAR', 'CORE', 'ARCHIVE',
  'ON-CHAIN FLOW', 'SOCIAL SENTIMENT', 'TECHNICAL ANALYSIS', 'NEW TOKENS', 'EXECUTION', 'HISTORICAL PATTERNS',
  'SENTINEL', 'PULSE', 'LENS', 'RADAR', 'CORE', 'ARCHIVE',
  'ON-CHAIN FLOW', 'SOCIAL SENTIMENT', 'TECHNICAL ANALYSIS', 'NEW TOKENS', 'EXECUTION', 'HISTORICAL PATTERNS',
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
