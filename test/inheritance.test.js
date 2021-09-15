const { expect } = require("chai")

describe("It tests the correct inheritance", () => {

    it("succeeds if contract _ has inherited from _", async () => {

    const A = await ethers.getContractFactory("A");
    const a = await A.deploy();
    await a.deployed();

    const B = await ethers.getContractFactory("B");
    const b = await B.deploy();
    await b.deployed();

    const C = await ethers.getContractFactory("C");
    const c = await C.deploy();
    await c.deployed();

    expect(await c.foo()).to.equal("C")

    const D = await ethers.getContractFactory("D");
    const d = await D.deploy();
    await d.deployed();

    expect(await d.foo()).to.equal("C")

    const E = await ethers.getContractFactory("E");
    const e = await E.deploy();
    await e.deployed();

    expect(await e.foo()).to.equal("B")

    const F = await ethers.getContractFactory("F");
    const f = await F.deploy();
    await f.deployed();

    expect(await f.foo()).to.equal("B")
    })
})