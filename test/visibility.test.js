const { expect } = require("chai");

describe("test the visibility of the Base and Child contract", () => {
    it("succeeds if function is not accessible", async () => {
        const Base = await ethers.getContractFactory("Base");
        const base = await Base.deploy()
        await base.deployed();

        const Child = await ethers.getContractFactory("Child")
        const child = await Child.deploy()
        await child.deployed;

    
        expect(await base.testPrivateFunc()).to.equal("private function called");

        expect(await child.callInternalFunc()).to.equal("Internal func called");
        expect(await base.publicFunc()).to.equal("Public func called");

        expect(await base.externalFunc()).to.equal("External func called");
    })
})