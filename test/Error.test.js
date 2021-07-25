const { expect } = require("chai");
const { BigNumber } = require("ethers");

describe("Tests require, revert, assert functions", () => {
    it("reverts if input is lower than 10", async () => {
        const ErrorContract = await ethers.getContractFactory("Error");
        const errorContract = await ErrorContract.deploy();
        await errorContract.deployed();

        await expect(errorContract.testRequire(5)).to.be.revertedWith("Input must be bigger than 10")
    })

    it("succeeds if input bigger than 10", async () => {
        const ErrorContract = await ethers.getContractFactory("Error");
        const errorContract = await ErrorContract.deploy();
        await errorContract.deployed();

        //TODO: How to test the working number input?
    })
})