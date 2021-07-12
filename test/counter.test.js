const { expect } = require("chai");
//const { ethers } = require("ethers");

describe("Counter", function() {
  it("Should return the value of a storage variable", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.count()).to.equal(0);

    //const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    
    // wait until the transaction is mined
    //await setGreetingTx.wait();

    //expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should increment its storage variable by 1", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    const setCounterTx = await counter.inc();

    //wait until transaction is mined
    await setCounterTx.wait();

    expect(await counter.count()).to.equal(1);
  });

  it("Should decrement its storage variable by 1", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    //since the dec operation results in an underflow let's increment it beforehand
    const setIncTx = await counter.inc();
    await setIncTx.wait();

    //prepare the decrement tx
    const setCounterTx = await counter.dec();

    //wait until transaction is mined
    await setCounterTx.wait();

    expect(await counter.count()).to.equal(0);
  });

  it("Should display an incremented value in the negative values", async function() {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    //prepare the decrement tx
    const setCounterTx = await counter.decToNegativeValue();

    //wait until transaction is mined
    await setCounterTx.wait();

    expect(await counter.isNegativeCount()).to.equal(-1);
  });
});
