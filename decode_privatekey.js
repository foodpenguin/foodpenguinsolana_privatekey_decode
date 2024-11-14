require('dotenv').config();


const { Keypair } = require('@solana/web3.js');
const bs58 = require('bs58');
const fs = require('fs');

const base58SecretKey = process.env.PRIVATE_KEY;


try {
  
  const secretKeyUint8Array = bs58.decode(base58SecretKey);

  const outputArray = Array.from(secretKeyUint8Array);

  const outputFilePath = 'solana_private_key.json';
  fs.writeFileSync(outputFilePath, JSON.stringify(outputArray, null, 2));

  console.log(`私鑰已成功匯出至 ${outputFilePath}`);
} catch (error) {
  console.error("私鑰轉換失敗:", error.message);
}
