import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import fs from 'fs';
import path from 'path';

const keysDir = path.join(__dirname, '..', 'keys');
if (!fs.existsSync(keysDir)) fs.mkdirSync(keysDir, { recursive: true });

const wallets = ['wallet', 'treasury', 'council-a', 'council-b', 'council-c'];

for (const name of wallets) {
  const kp = Keypair.generate();
  const pub = kp.publicKey.toBase58();
  const priv = bs58.encode(kp.secretKey);
  const file = path.join(keysDir, `${name}.json`);
  fs.writeFileSync(file, JSON.stringify({ publicKey: pub, secretKey: priv }, null, 2));
  console.log(`${name}: ${pub}`);
}
