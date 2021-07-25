const { expect } = require("chai");
const { BigNumber } = require("ethers");

describe("Testing the Function contract", () => {
    it("returns true if returnMany function works", async () => {
        const FunctionContract = await ethers.getContractFactory("Function");
        const functionContract = await FunctionContract.deploy();
        await functionContract.deployed();

        expect(await functionContract.returnMany()).to.to.deep.equal([BigNumber.from(1), true, BigNumber.from(2)]);
    });

    it("succeeds if assigned values are being returned correctly", async () => {
        const FunctionContract = await ethers.getContractFactory("Function");
        const functionContract = await FunctionContract.deploy();
        await functionContract.deployed();

        expect(await functionContract.assigned()).to.deep.equal([BigNumber.from(1), true, BigNumber.from(2)])
    });

    it("succeeds if destructing assignments works", async () => {
        const FunctionContract = await ethers.getContractFactory("Function");
        const functionContract = await FunctionContract.deploy();
        await functionContract.deployed();

        expect(await functionContract.destructingAssignments()).to.deep.equal([BigNumber.from(1), true, BigNumber.from(2), BigNumber.from(4), BigNumber.from(6)])
    });

    it("succeeds if arrayInput is successful", async () => {
        const FunctionContract = await ethers.getContractFactory("Function");
        const functionContract = await FunctionContract.deploy();
        await functionContract.deployed();

        await functionContract.arrayInput([1,2])
        expect(await functionContract.arr()).to.deep.equal(BigNumber.from(1), BigNumber.from(2))
    })
})