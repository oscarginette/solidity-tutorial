/**
 * An important note here: that hre.ethers is auto-imported when we run it using hardhat.
 * You don’t need to import anything!
 */

async function main() {
  const [owner, somebodyElse] = await hre.ethers.getSigners();
  const keyboardsContractFactory = await hre.ethers.getContractFactory(
    "Keyboards"
  );
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();

  const keyboardTxn1 = await keyboardsContract.create(
    "A really great keyboard!"
  );
  await keyboardTxn1.wait();

  const keyboardTx2 = await keyboardsContract
    .connect(somebodyElse)
    .create("An even better keyboard!");
  await keyboardTx2.wait();

  keyboards = await keyboardsContract.getKeyboards();
  console.log("We got the keyboards!", keyboards);

  keyboards = await keyboardsContract.connect(somebodyElse).getKeyboards();
  console.log("And as somebody else!", keyboards);
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
