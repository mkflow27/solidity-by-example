const { expect } = require("chai");
const { BigNumber } = require("ethers");

describe("Tests require, revert, assert functions", () => {
    it("reverts if input is lower than 10", async () => {
        const ErrorContract = await ethers.getContractFactory("Error");
        const errorContract = await ErrorContract.deploy();
        await errorContract.deployed();

        await expect(errorContract.testRequire(5)).to.be.revertedWith("Input must be bigger than 10")
    })

    it("reverts if input is bigger than 10", async () => {
        const ErrorContract = await ethers.getContractFactory("Error");
        const errorContract = await ErrorContract.deploy();
        await errorContract.deployed();

        await expect(errorContract.testRevert(6)).to.be.revertedWith("Input must be greater than 10")
    })

    it("succeeds if num exists", async () => {
        const ErrorContract = await ethers.getContractFactory("Error");
        const errorContract = await ErrorContract.deploy();
        await errorContract.deployed();

        expect(await errorContract.num()).to.equal(BigNumber.from(0));
    })

    it("succeeds if assert works on testAssert", async () => {
        const ErrorContract = await ethers.getContractFactory("Error");
        const errorContract = await ErrorContract.deploy();
        await errorContract.deployed();

        expect(await errorContract.testAssert()).to.be.empty;
    })
})