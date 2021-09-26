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
    const A = await ethers.getContractFactory("AAA");
    const a = await A.deploy();
    await a.deployed();
    console.log("A deployed to:", a.address);


    const B = await ethers.getContractFactory("BBB");
    const b = await B.deploy();
    await b.deployed();
    console.log("B deployed to:", b.address);


    const C = await ethers.getContractFactory("CCC");
    const c = await C.deploy();
    await c.deployed();
    console.log("C deployed to:", c.address);

    const D = await ethers.getContractFactory("DDD");
    const d = await D.deploy();
    await d.deployed();
    console.log("D deployed to:", d.address);



  //deploying gas contract
  //const i = await gas.i();
  //console.log("i currently at", i);

  //
  //await gas.forever();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
