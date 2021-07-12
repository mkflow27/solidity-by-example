const {expect} = require("chai")


describe("Checks the proper implementations of conditionals in the smart contract", function() {
    it("should test if state variable returns 0", async function() {
        const IfElse = await ethers.getContractFactory("IfElse")
        const ifElse = await IfElse.deploy();
        await ifElse.deployed();
        
        expect(await ifElse.foo(1)).to.equal(0);
        expect(await ifElse.foo(10)).to.equal(1);
        expect(await ifElse.foo(30)).to.equal(2);
    })
})
