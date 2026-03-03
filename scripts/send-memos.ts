import { Connection, Keypair, Transaction, TransactionInstruction, PublicKey, sendAndConfirmTransaction } from '@solana/web3.js';
import bs58 from 'bs58';
import fs from 'fs';
import path from 'path';

const HELIUS = 'https://mainnet.helius-rpc.com/?api-key=e30ea48e-bf93-4f7f-9e54-68ae7300fcc5';
const MEMO_PROGRAM = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');

const memos = [
  'AEGIS // INIT // 6 agents deployed. SENTINEL, PULSE, LENS, RADAR, ARCHIVE, CORE. Collective research active. Solana focus.',
  'AEGIS // SENTINEL // On-chain flow scan active. Tracking whale wallets and liquidity shifts across DEXes.',
  'AEGIS // PULSE // Social sentiment monitoring. Twitter, Discord, Telegram. Alpha leak detection running.',
  'AEGIS // LENS // Technical analysis active. Chart patterns, volume profiles. Support and resistance tracking.',
  'AEGIS // RADAR // New token detection. Scanning pump.fun, Raydium, Jupiter. Early launch alerts.',
  'AEGIS // ARCHIVE // Historical pattern analysis. Backtesting strategies. Threshold refinement in progress.',
  'AEGIS // CORE // Consensus reached. 5/6 agents signal. Shield purchase queued. Tweet drafting.',
  'AEGIS // EXEC // Shield bought. Position open. Tweet posted. @aegis6agents',
  'AEGIS // STATUS // All agents nominal. Next scan cycle in 60s. Solana market monitored.',
  'AEGIS // HEARTBEAT // Collective operational. Shields deployed when called. Twitter live.',
];

async function main() {
  const keyFile = path.join(__dirname, '..', 'keys', 'wallet.json');
  const { secretKey } = JSON.parse(fs.readFileSync(keyFile, 'utf-8'));
  const kp = Keypair.fromSecretKey(bs58.decode(secretKey));
  const conn = new Connection(HELIUS, 'confirmed');

  console.log(`Wallet: ${kp.publicKey.toBase58()}`);
  const bal = await conn.getBalance(kp.publicKey);
  console.log(`Balance: ${bal / 1e9} SOL`);
  if (bal < 5000000) {
    console.log('Need ~0.005 SOL. Fund wallet first.');
    return;
  }

  const sigs: string[] = [];
  for (let i = 0; i < memos.length; i++) {
    const tx = new Transaction().add(
      new TransactionInstruction({
        keys: [{ pubkey: kp.publicKey, isSigner: true, isWritable: true }],
        programId: MEMO_PROGRAM,
        data: Buffer.from(memos[i]),
      })
    );
    const sig = await sendAndConfirmTransaction(conn, tx, [kp]);
    sigs.push(sig);
    console.log(`Memo ${i + 1}/10: ${sig}`);
    if (i < memos.length - 1) await new Promise((r) => setTimeout(r, 1500));
  }

  console.log('\n--- MEMO_LOGS for constants.ts ---');
  const ts = new Date().toISOString();
  sigs.forEach((s, i) => {
    console.log(`  { id: 'A-${String(i + 1).padStart(3, '0')}', content: '${memos[i].replace(/'/g, "\\'")}', signature: '${s}', ts: '${ts}' },`);
  });
}

main().catch(console.error);
