import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import TopNav from '@/components/TopNav';
import './globals.css';

const sans = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'AEGIS — 6 agents. 1 signal. Shields deployed.',
  description: 'Six AI agents analyze the crypto market. Collective research. Core executes. Shields bought. Twitter posted.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <TopNav />
        <main className="main-full">{children}</main>
      </body>
    </html>
  );
}
