/**
 * An important note here: that hre.ethers is auto-imported when we run it using hardhat. 
 * You don’t need to import anything!
 */

async function main() {
  const keyboardsContractFactory = await hre.ethers.getContractFactory(
    "Keyboards"
  );
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();

  console.log("Contract deployed to:", keyboardsContract.address);

  const keyboards = await keyboardsContract.getKeyboards();

  console.log("We got the Keyboards:", keyboards);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // Output
  /**
   * npx hardhat run scripts/start.js
   *   Compiled 1 Solidity file successfully
   * Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
   * We got the Keyboards: []
   */