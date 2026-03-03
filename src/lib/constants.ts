export const PROJECT = {
  name: 'AEGIS',
  tagline: '6 agents. 1 signal. Shields deployed.',
  description: 'Six AI agents analyze the entire crypto market. Each has a distinct research task. When the collective signals a call — the core buys shields and posts to Twitter.',
  wallet: 'BfoxM8P1oJdZC28N2WnE9nQk7cFRRHge1VwHN7zJirpD',
  treasury: '3gNZFGcz1PVf41drPTD2qRcNUTpba5x6SKjLWYJSiwJG',
  multisig: 'HomAmT2i6irL3sSf7PpCVjrykNsCb7VMi9HSMWWUSTQd',
  twitter: 'https://x.com/aegis6agents',
  sns: 'aegis6.sol',
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

export const MEMO_LOGS: { id: string; content: string; signature: string; ts: string }[] = [
  { id: 'A-001', content: 'AEGIS // INIT // 6 agents deployed. SENTINEL, PULSE, LENS, RADAR, ARCHIVE, CORE. Collective research active. Solana focus.', signature: '4oyBS778LnCwYtbCyseWLYtbBrwyvprNJyPYdxw6sjWqarkNKKBV8Q5JRVaCFuEk3qW7wTKB3sasHSDDSHBF9bBV', ts: '2026-03-03T22:12:13.329Z' },
  { id: 'A-002', content: 'AEGIS // SENTINEL // On-chain flow scan active. Tracking whale wallets and liquidity shifts across DEXes.', signature: '35mQdodbbEcVxyjkCDoHr6JyDE3Ba27J6YdYGgPy5B6mmhfG2fTKF9DkcQh5WYisfcFppb73XV2SeDT8UzvEybbX', ts: '2026-03-03T22:12:13.329Z' },
  { id: 'A-003', content: 'AEGIS // PULSE // Social sentiment monitoring. Twitter, Discord, Telegram. Alpha leak detection running.', signature: '55y3BTyxZMskBHi5pHPindQpNVyjd5TD2pr8YSfEJPJo7FHtoUm2nFEhawmKzQMkVzsDydVcmaTt1qHyzJ72BpUn', ts: '2026-03-03T22:12:13.329Z' },
  { id: 'A-004', content: 'AEGIS // LENS // Technical analysis active. Chart patterns, volume profiles. Support and resistance tracking.', signature: '3T6re9qrexuYi2Ys9aMcUN2gLSdSKxsnqjtiH2WLghaU4jias1VLtjaCwCaqdabJXWPke92NT4zP3w1Q1kYKNDfs', ts: '2026-03-03T22:12:13.329Z' },
  { id: 'A-005', content: 'AEGIS // RADAR // New token detection. Scanning pump.fun, Raydium, Jupiter. Early launch alerts.', signature: '5CXEVB79EuJthnv9Jf7KfscstgDbbrBwrHcY7Sz79tBaKPa5dPSkCXMVPG391yNPcDSwVBv2JPvKar4ahGU8G2C2', ts: '2026-03-03T22:12:13.329Z' },
  { id: 'A-006', content: 'AEGIS // ARCHIVE // Historical pattern analysis. Backtesting strategies. Threshold refinement in progress.', signature: '28DDPTrT5iwxMwMwmZwTVb69JyZAumtn1nXkaxJB88bZbV6nPgnvaephebsvfsZrNNBbAzbah94WdfaTG46oqjiV', ts: '2026-03-03T22:12:13.329Z' },
  { id: 'A-007', content: 'AEGIS // CORE // Consensus reached. 5/6 agents signal. Shield purchase queued. Tweet drafting.', signature: '2neR8qSD1F5bNMgXQVb5UJMknGaNFiUzFTbDEcPQLFsmRXQRg4K6k7sG5MdMJwg4YnzsrpqFGUwCZfTpwG4P63Ny', ts: '2026-03-03T22:12:13.329Z' },
  { id: 'A-008', content: 'AEGIS // EXEC // Shield bought. Position open. Tweet posted. @aegis6agents', signature: 'noHYchmWDLQX9EcLWXSJsMDiJdwoaoF1sNrbYPXujEchJcfrSuVtvvKqj9Qdq38TBJpb6qbvK7tDrCpVB6D1mip', ts: '2026-03-03T22:12:13.329Z' },
  { id: 'A-009', content: 'AEGIS // STATUS // All agents nominal. Next scan cycle in 60s. Solana market monitored.', signature: '2w9pueGczfviTCSHAX7thASEJVwje79SXTQTt2YcfxYFncCB5gJM5tB9N6cEwxxKJVwk89e5tDV6yRhpiz7NQfnW', ts: '2026-03-03T22:12:13.329Z' },
  { id: 'A-010', content: 'AEGIS // HEARTBEAT // Collective operational. Shields deployed when called. Twitter live.', signature: '4UoyRvTVrLbczX6yoHrHLZHa1ymJ4itqofXSpBJvMoPpoYYyZeswhSNyfyxcPUAWbL82eEzRjux6RErpwWQyyiZf', ts: '2026-03-03T22:12:13.329Z' },
];
export const COUNCIL = [
  { name: 'Vault-A', address: 'HK7Bin56VcxZY442PHucFnvjuysiNa9uikDiiAJAhpQC' },
  { name: 'Vault-B', address: 'GLH2YYPXCoLfDMrPcdQseVAxCxJ6quTw2XoeJ9Hyt3JL' },
  { name: 'Vault-C', address: '68WnSDaCe4s7msjsfT3r8PuxgYvjL7MfFZqL78QPxdRT' },
];
