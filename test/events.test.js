const { expect } = require("chai");

describe("Testing the event emission", () => {

    it("succeeds if Log event works well", async () => {

        const [owner, addr1, addr2] = await ethers.getSigners();

        const EventContract = await ethers.getContractFactory("Event");
        const eventContract = await EventContract.deploy();
        await eventContract.deployed();

        await expect(eventContract.test())
        .to.emit(eventContract, 'Log')
        .withArgs(owner.address, "Hello to console")

        .and.to.emit(eventContract, 'Log')
        .withArgs(owner.address, "Hello solidity")

        .and.to.emit(eventContract, 'AnotherLog')        
    });
});