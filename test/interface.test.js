const {expect} = require("chai")
const { BigNumber} = require("ethers");



describe("Testing if Interface works", () => {
    beforeEach( async () => {
        const Counter = await ethers.getContractFactory("CounterCounter")
        const counter = await Counter.deploy();
        await counter.deployed();

        //const ICounter = await ethers.getContractAt("ICounter")
        //const iCounter =  ICounter.deploy();
        //await iCounter.deployed();

        const MyContract = await ethers.getContractFactory("MyContract")
        const myContract = await MyContract.deploy();
        await myContract.deployed();
    }
    )
    it("succees if Counter contract returns correct value", async () => {

        const Counter = await ethers.getContractFactory("CounterCounter")
        const counter = await Counter.deploy();
        await counter.deployed();

        const MyContract = await ethers.getContractFactory("MyContract")
        const myContract = await MyContract.deploy();
        await myContract.deployed();

        expect(await counter.count()).to.equal(BigNumber.from(0))
        await myContract.incrementCounter(counter.address)
        expect(await counter.count()).to.equal(BigNumber.from(1))

    }),
    it("succees if Counter contract returns correct value", async () => {

        const Counter = await ethers.getContractFactory("CounterCounter")
        const counter = await Counter.deploy();
        await counter.deployed();

        const MyContract = await ethers.getContractFactory("MyContract")
        const myContract = await MyContract.deploy();
        await myContract.deployed();

        expect(await counter.count()).to.equal(BigNumber.from(0))
        await myContract.incrementCounter(counter.address)
        expect(await myContract.getCount(counter.address)).to.equal(BigNumber.from(1))

    })
})