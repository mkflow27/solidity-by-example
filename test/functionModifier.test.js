const { expect } = require("chai");
const { BigNumber } = require("ethers");

describe("Testing the Function contract", () => {

    it("succeeds if changing owner work", async () => {
        const [owner, addr1, addr2] = await ethers.getSigners();


        const FunctionModifierContract = await ethers.getContractFactory("FunctionModifier");
        const functionModifierContract = await FunctionModifierContract.deploy();
        await functionModifierContract.deployed();

        expect(await functionModifierContract.owner()).to.equal(owner.address);

        //change owner.
        await functionModifierContract.changeOwner(addr1.address)
        expect(await functionModifierContract.owner()).to.equal(addr1.address)
    });

    it("succeeds if function modifier onlyOwner works", async () => {
        const [owner, addr1, addr2] = await ethers.getSigners();


        const FunctionModifierContract = await ethers.getContractFactory("FunctionModifier");
        const functionModifierContract = await FunctionModifierContract.deploy();
        await functionModifierContract.deployed();

        //change owner.
        await functionModifierContract.changeOwner(addr1.address)

        //trying it from the original owner
        await expect(functionModifierContract.changeOwner(addr2.address)).to.be.revertedWith("Not owner");

        //connect a new address to the contract to mimic sending txs from another eoa
        await expect(functionModifierContract.connect(addr2).changeOwner(addr2.address)).to.be.revertedWith("Not owner");
        

    });
    it("succeeds if function modifier validAddress works", async () => {
        const [owner, addr1, addr2] = await ethers.getSigners();


        const FunctionModifierContract = await ethers.getContractFactory("FunctionModifier");
        const functionModifierContract = await FunctionModifierContract.deploy();
        await functionModifierContract.deployed();

        //check if zero address is allowed.
        await expect(functionModifierContract.changeOwner('0x0000000000000000000000000000000000000000')).
        to.be.revertedWith("Not a valid address");
    });
});