const fs = require("fs");
const { ethers } = require("ethers");

// Load ABI from mounted file
const abi = JSON.parse(fs.readFileSync(process.env./deployed_ABI.json,
 "utf-8"));
const provider = new ethers.JsonRpcProvider(process.env.https://polygon-mainnet.infura.io/v3/89d6602446734263a40da205fa5867d0);
const signer = new ethers.Wallet(process.env.87a6d708587a9dbf6bc43434bb393a271164ca940a8312147251d7c2c88470d7, provider);
const contract = new ethers.Contract(process.env.0x678dae2dfa247c22e72704cf565623a91a8180a7, abi, signer);
// Trigger flashloan (example)
async function main() {
  try {
    await contract.executeFlashloan( 
TOKEN0_ADDRESS, TOKEN1_ADDRESS
	0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174, 0xC2132D05D31c914a87C6611C10748AEB04B58E8F
 
FLASHLOAN_POOL
	0xA97684ead0e402dC232d5A977953DF7ECBaB3CDb 
BORROW_AMOUNT	1000000000000 
GAS_LIMIT	1500000
); 
    console.log("Flashloan executed!");
  } catch (err) {
    console.error("Failed:", err);
  }
}

main();
