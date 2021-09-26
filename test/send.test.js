const {expect} = require("chai");

describe("tests multiple ways to send ether", () => {
    it("succeeds if Transfer works", async () => {
        const SendEther = await ethers.getContractFactory("SendEther");
        const sendEther = await SendEther.deploy();
        await sendEther.deployed();

        const ReceiveEther = await ethers.getContractFactory("ReceiveEther");
        const receiveEther = await ReceiveEther.deploy();
        await receiveEther.deployed();

        var balance = await receiveEther.getBalance();
        await console.log(balance.toString())

        await sendEther.moveViaTransfer(receiveEther.address, {value: ethers.utils.parseEther("1.0")})

        balance = await receiveEther.getBalance();
        await console.log(balance.toString())
    }),
    it("succeeds if send works", async () => {
        const SendEther = await ethers.getContractFactory("SendEther");
        const sendEther = await SendEther.deploy();
        await sendEther.deployed();

        const ReceiveEther = await ethers.getContractFactory("ReceiveEther");
        const receiveEther = await ReceiveEther.deploy();
        await receiveEther.deployed();

        var balance = await receiveEther.getBalance();
        await console.log(balance.toString())

        await sendEther.moveViaSend(receiveEther.address, {value: ethers.utils.parseEther("1.0")})

        balance = await receiveEther.getBalance();
        await console.log(balance.toString())
    }),
    it("succeeds if send works", async () => {
        const SendEther = await ethers.getContractFactory("SendEther");
        const sendEther = await SendEther.deploy();
        await sendEther.deployed();

        const ReceiveEther = await ethers.getContractFactory("ReceiveEther");
        const receiveEther = await ReceiveEther.deploy();
        await receiveEther.deployed();

        var balance = await receiveEther.getBalance();
        await console.log(balance.toString())

        await sendEther.moveViaCall(receiveEther.address, {value: ethers.utils.parseEther("1.0")})

        balance = await receiveEther.getBalance();
        await console.log(balance.toString())
    })
})