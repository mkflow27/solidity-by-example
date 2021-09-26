const { BigNumber } = require("@ethersproject/contracts/node_modules/@ethersproject/bignumber");
const { expect } = require("chai");

describe("Test implementation of the Wallet", () => {
    it("succeeds if constructor is payable", async () => {
        const Wallet = await ethers.getContractFactory("Wallet");
        const wallet = await Wallet.deploy({ value: ethers.utils.parseEther("1.0")});
        await wallet.deployed();

        const provider = await ethers.provider; 

        //const balance = await provider.getBalance(wallet.address);
        //await console.log(balance.toString())
        expect(await provider.getBalance(wallet.address)).to.equal(ethers.utils.parseEther("1.0"))
    }),
    it("succeeds if deposit works", async () => {
        const Wallet = await ethers.getContractFactory("Wallet");
        const wallet = await Wallet.deploy({ value: ethers.utils.parseEther("1.0")});
        await wallet.deployed();

        const provider = await ethers.provider;

        await wallet.deposit({value: ethers.utils.parseEther("1.0")})
        //expect(await wallet.deposit({value: 1})).to.equal(1)

        //const balance = await provider.getBalance(wallet.address);
        //await console.log(balance.toString())

        expect(await provider.getBalance(wallet.address)).to.equal(ethers.utils.parseEther("2.0"))
    }),
    it("succeeds if withdrawl works", async () => {
        const Wallet = await ethers.getContractFactory("Wallet");
        const wallet = await Wallet.deploy({ value: ethers.utils.parseEther("1.0")});
        await wallet.deployed();

        const provider = await ethers.provider;

        const balance = await(provider.getBalance(wallet.owner()));
        await console.log("user balance before deposit",balance.toString())

        await wallet.deposit({value: ethers.utils.parseEther("1.0")})
        //expect(await wallet.deposit({value: 1})).to.equal(1)

        var balance_1 = await provider.getBalance(wallet.address);
        await console.log("wallet balance after user deposit:", balance_1.toString())

        const balance_user = await(provider.getBalance(wallet.owner()));
        await console.log("user balance after deposit",balance_user.toString())

        expect(await provider.getBalance(wallet.address)).to.equal(ethers.utils.parseEther("2.0"))

        await wallet.withdraw()
        expect(await provider.getBalance(wallet.address)).to.equal(ethers.utils.parseEther("0.0"))

        var balance_2 = await provider.getBalance(wallet.address);
        await console.log(balance_2.toString())

        var balance_user_2 = await(provider.getBalance(wallet.owner()));
        await console.log("user balance after withdraw",balance_user_2.toString())
    })
})