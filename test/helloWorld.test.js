const { expect } = require("chai");

describe("HelloWorld", function() {
  it("Should return the value of a storage variable", async function() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();
    await helloWorld.deployed();

    expect(await helloWorld.greet()).to.equal("Hello World");
  });
});
