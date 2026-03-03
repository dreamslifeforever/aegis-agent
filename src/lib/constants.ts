export const PROJECT = {
  name: 'AEGIS',
  tagline: '6 agents. 1 signal. Shields deployed.',
  description: 'Six AI agents analyze the entire crypto market. Each has a distinct research task. When the collective signals a call — the core buys shields and posts to Twitter.',
  wallet: 'BfoxM8P1oJdZC28N2WnE9nQk7cFRRHge1VwHN7zJirpD',
  treasury: '3gNZFGcz1PVf41drPTD2qRcNUTpba5x6SKjLWYJSiwJG',
  multisig: '',
  twitter: 'https://x.com/aegis6agents',
};

export const HELIUS = 'https://mainnet.helius-rpc.com/?api-key=e30ea48e-bf93-4f7f-9e54-68ae7300fcc5';

export const AGENTS = [
  { id: 1, name: 'SENTINEL', role: 'On-chain flow', task: 'Tracks SOL movement, whale wallets, and liquidity shifts across Solana DEXes.' },
  { id: 2, name: 'PULSE', role: 'Social sentiment', task: 'Monitors Twitter, Discord, and Telegram for alpha leaks and sentiment shifts.' },
  { id: 3, name: 'LENS', role: 'Technical analysis', task: 'Chart patterns, volume profiles, support/resistance across major pairs.' },
  { id: 4, name: 'RADAR', role: 'New token detection', task: 'Scans pump.fun, Raydium, Jupiter for early launches and liquidity events.' },
  { id: 5, name: 'CORE', role: 'Execution', task: 'Receives signals from all agents. Buys shields when consensus is reached. Posts calls to Twitter.' },
  { id: 6, name: 'ARCHIVE', role: 'Historical patterns', task: 'Backtests strategies, correlates past signals with outcomes, refines thresholds.' },
];

export const MEMO_LOGS: { id: string; content: string; signature: string; ts: string }[] = [];
export const COUNCIL = [
  { name: 'Vault-A', address: 'HK7Bin56VcxZY442PHucFnvjuysiNa9uikDiiAJAhpQC' },
  { name: 'Vault-B', address: 'GLH2YYPXCoLfDMrPcdQseVAxCxJ6quTw2XoeJ9Hyt3JL' },
  { name: 'Vault-C', address: '68WnSDaCe4s7msjsfT3r8PuxgYvjL7MfFZqL78QPxdRT' },
];
