import { Connection, Keypair, Transaction, PublicKey } from '@solana/web3.js';
import { registerDomainNameV2 } from '@bonfida/spl-name-service';
import { getAssociatedTokenAddressSync, NATIVE_MINT, createAssociatedTokenAccountInstruction, createSyncNativeInstruction } from '@solana/spl-token';
import { SystemProgram } from '@solana/web3.js';
import bs58 from 'bs58';
import fs from 'fs';
import path from 'path';

const HELIUS = 'https://mainnet.helius-rpc.com/?api-key=e30ea48e-bf93-4f7f-9e54-68ae7300fcc5';
const DOMAIN = 'aegis6';

async function main() {
  const keyFile = path.join(__dirname, '..', 'keys', 'wallet.json');
  const { secretKey } = JSON.parse(fs.readFileSync(keyFile, 'utf-8'));
  const kp = Keypair.fromSecretKey(bs58.decode(secretKey));
  const conn = new Connection(HELIUS, 'confirmed');

  console.log(`Wallet: ${kp.publicKey.toBase58()}`);
  const bal = await conn.getBalance(kp.publicKey);
  console.log(`Balance: ${bal / 1e9} SOL`);

  const ata = getAssociatedTokenAddressSync(NATIVE_MINT, kp.publicKey, true);
  console.log(`wSOL ATA: ${ata.toBase58()}`);

  const ataInfo = await conn.getAccountInfo(ata);
  const wrapIxs = [];
  if (!ataInfo) {
    wrapIxs.push(createAssociatedTokenAccountInstruction(kp.publicKey, ata, kp.publicKey, NATIVE_MINT));
  }
  wrapIxs.push(
    SystemProgram.transfer({ fromPubkey: kp.publicKey, toPubkey: ata, lamports: 1_000_000_000 }),
    createSyncNativeInstruction(ata),
  );

  console.log(`Registering ${DOMAIN}.sol ...`);

  const regIxs = await registerDomainNameV2(
    conn,
    DOMAIN,
    0,
    kp.publicKey,
    ata,
    NATIVE_MINT,
  );

  const tx = new Transaction().add(...wrapIxs, ...regIxs);
  tx.feePayer = kp.publicKey;
  tx.recentBlockhash = (await conn.getLatestBlockhash()).blockhash;
  tx.sign(kp);

  const sig = await conn.sendRawTransaction(tx.serialize());
  await conn.confirmTransaction(sig, 'confirmed');
  console.log(`Registered ${DOMAIN}.sol!`);
  console.log(`Signature: ${sig}`);
}

main().catch(console.error);
