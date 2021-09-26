// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Receiver = await hre.ethers.getContractFactory("Received");
  const receiver = await Receiver.deploy();
  await receiver.deployed();
  console.log("receiver deployed to:", receiver.address);

  const Caller = await hre.ethers.getContractFactory("Caller");
  const caller = await Caller.deploy();
  await caller.deployed();
  console.log("caller deployed to:", caller.address);

  //Calling the many function
  //const many = await functionContract.returnMany();
  //console.log("many currently at", many);

  //const transaction = await caller.testCallFoo(receiver.address, {value: ethers.utils.parseEther("0.02")})
  //await console.log(transaction)

  //const receipt = await transaction.wait();
  //console.log(receipt.events?.filter((x) => {return x.event == "Response"}));

  const transaction = await caller.testCallDoesNotExists(receiver.address)
  await console.log(transaction)

  const receipt = await transaction.wait();
  console.log(receipt.events?.filter((x) => {return x.event == "Response"}));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    //process.exit(1);
  });

