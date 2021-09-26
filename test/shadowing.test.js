const { expect } = require("chai");

describe("It tests the correct inheritance", () => {

    it("succeeds if contract _ has inherited from _", async () => {

    const A = await ethers.getContractFactory("AA");
    const a = await A.deploy();
    await a.deployed();

    const B = await ethers.getContractFactory("BB");
    const b = await B.deploy();
    await b.deployed();

    expect(await a.getName()).to.equal("Contract A");
    expect(await b.getName()).to.equal("Contract A");

    const C = await ethers.getContractFactory("CC");
    const c = await C.deploy();
    await c.deployed();

    expect(await c.getName()).to.equal("Contract C")
    })
})