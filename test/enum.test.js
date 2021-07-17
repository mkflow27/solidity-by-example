const {expect} = require("chai");
const { BigNumber} = require("ethers");

describe("Test the enum contract", () => {
    it("tests default value of enum", async () => {
        const EnumContract = await ethers.getContractFactory("Enum");
        const enumContract = await EnumContract.deploy()
        await enumContract.deployed()

        expect(await enumContract.status()).to.be.equal(BigNumber.from(0));

        expect(await enumContract.get()).to.be.equal(BigNumber.from(0));

        //set function
        await enumContract.set(1)
        expect(await enumContract.status()).to.be.equal(1);

        //cancel function
        await enumContract.cancel()
        expect(await enumContract.status()).to.be.equal(BigNumber.from(4));
        expect(await enumContract.status()).to.be.equal(BigNumber.from(4));

        //reset function
        await enumContract.reset()
        expect(await enumContract.status()).to.be.equal(BigNumber.from(0));
        expect(await enumContract.status()).to.be.equal(BigNumber.from(0));

    });
    it("tests the Enum import contract", async () => {
        const EnumSecondContract = await ethers.getContractFactory("EnumSecond");
        const enumSecondContract = await EnumSecondContract.deploy()
        await enumSecondContract.deployed()

        //test the contract which imports the enum
        expect(await enumSecondContract.status()).to.be.equal(BigNumber.from(0));


    })
})