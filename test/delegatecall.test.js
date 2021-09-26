const {expect} = require("chai");
const { BigNumber } = require("ethers");



describe("test", () => {
    it("succeeds if ...", async () => {
        const DelegateCallee = await ethers.getContractFactory("DelegateCallee")
        const delegateCallee = await DelegateCallee.deploy();
        await delegateCallee.deployed();

        const DelegateCaller = await ethers.getContractFactory("DelegateCaller")
        const delegateCaller = await DelegateCaller.deploy();
        await delegateCaller.deployed();

        expect(await delegateCallee.num()).to.equal(BigNumber.from(0))
        expect(await delegateCaller.num()).to.equal(BigNumber.from(0))

        var options = { gasPrice: 10, gasLimit: 185000};
        await delegateCaller.setVars(delegateCallee.address, 123, options)
        
        expect(await delegateCallee.num()).to.equal(BigNumber.from(0))
        expect(await delegateCaller.num()).to.equal(BigNumber.from(123))
    })
})