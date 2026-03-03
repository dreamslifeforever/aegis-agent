'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PROJECT } from '@/lib/constants';

const links = [
  { href: '/', label: 'Home' },
  { href: '/agents', label: 'Agents' },
  { href: '/core', label: 'Core' },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="nav-top">
      <Link href="/" className="nav-logo">
        AEGIS
      </Link>
      <div className="nav-links">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`nav-link ${pathname === l.href ? 'active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <a
        href={PROJECT.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
        style={{ fontSize: '0.75rem' }}
      >
        @aegis6agents
      </a>
    </nav>
  );
}
