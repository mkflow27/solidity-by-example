const { expect } = require("chai");

describe("Tests the call function", () => {
    it("successds if ...", async () => {

        const [owner, addr1, addr2] = await ethers.getSigners();

        const Receiver = await ethers.getContractFactory("Received");
        const receiver = await Receiver.deploy();
        await receiver.deployed();

        const Call = await ethers.getContractFactory("Caller");
        const call = await Call.deploy();
        await call.deployed();

        await expect(call.testCallFoo(
            receiver.address, {value: ethers.utils.parseEther("0.02")}))
            .to.emit(call, "Response")
            .withArgs(true, ethers.utils.hexZeroPad(ethers.utils.hexlify(11),32))
            .and.to.emit(receiver, "Received")
            .withArgs(call.address ,ethers.utils.parseEther("0.02"),"called foo")
    }),
    it("successds if ...", async () => {

        const [owner, addr1, addr2] = await ethers.getSigners();

        const Receiver = await ethers.getContractFactory("Received");
        const receiver = await Receiver.deploy();
        await receiver.deployed();

        const Call = await ethers.getContractFactory("Caller");
        const call = await Call.deploy();
        await call.deployed();

        await expect(call.testCallDoesNotExists(
            receiver.address))
            .to.emit(call, "Response")
            .withArgs(true, "0x")
    })

})