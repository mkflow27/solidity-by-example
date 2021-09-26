const { expect } = require("chai");

describe("Tests the calling of parent contracts", () => {

    it("checking", async () => {

    const A = await ethers.getContractFactory("AAA");
    const a = await A.deploy();
    await a.deployed();

    const B = await ethers.getContractFactory("BBB");
    const b = await B.deploy();
    await b.deployed();

    const C = await ethers.getContractFactory("CCC");
    const c = await C.deploy();
    await c.deployed();

    const D = await ethers.getContractFactory("DDD");
    const d = await D.deploy();
    await d.deployed();

    expect(await a.foo())
    .to.emit(a, "Log")
    .withArgs("A.foo is called")

    expect(await b.foo())
    .to.emit(b, 'Log')
    .withArgs("B.foo is called")
    .and.to.emit(b, 'Log')
    .withArgs("A.foo is called")

    expect(await b.bar())
    .to.emit(b, 'Log')
    .withArgs("B.bar called")
    .and.to.emit(b, 'Log')
    .withArgs("A.bar is called")

    expect(await c.foo())
    .to.emit(c, "Log")
    .withArgs("C.foo called")
    .and.to.emit(c, "Log")
    .withArgs("A.foo is called")

    expect(await c.bar())
    .to.emit(c, "Log")
    .withArgs("C.bar is called")
    .and.to.emit(c, "Log")
    .withArgs("A.bar is called")

    expect(await d.foo())
    .to.emit(d, "Log")
    .withArgs("C.foo called")
    .and.to.emit(d, "Log")
    .withArgs("A.foo is called")

    });
})