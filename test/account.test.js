const { expect } = require("chai");
const { BigNumber } = require("ethers");

describe("Deposit to the account and withdraw", () => {
    it("succeeds if deposit is successful", async () => {
        const Account = await ethers.getContractFactory("Account");
        const account = await Account.deploy();
        await account.deployed();

        await account.deposit(100);
        expect(await account.balance()).to.equal(BigNumber.from("100"));
    }),
    it("succeeds if overvlow is cought", async () => {
        const Account = await ethers.getContractFactory("Account");
        const account = await Account.deploy();
        await account.deployed();

        await expect(account.deposit(BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639936"))).to.reverted;
    })
    it("succeeds if overvlow is cought via two deposits", async () => {
        const Account = await ethers.getContractFactory("Account");
        const account = await Account.deploy();
        await account.deployed();

        await account.deposit(BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639935"));
        await expect(account.deposit(BigNumber.from("1"))).to.reverted;
    })
    it("succeeds if negative deposits are not allowed", async () => {
        const Account = await ethers.getContractFactory("Account");
        const account = await Account.deploy();
        await account.deployed();

        await expect(account.deposit(BigNumber.from("-1"))).to.be.reverted;
    }),
    it("succeeds if withdrawing is possible", async () => {
        const Account = await ethers.getContractFactory("Account");
        const account = await Account.deploy();
        await account.deployed();

        await account.deposit(BigNumber.from("100"));
        //expect(await account.balance()).to.equal(BigNumber.from("100"))
        
        await account.withdraw(BigNumber.from("50"));

        expect(await account.balance()).to.equal(BigNumber.from("50"))
    })
    it("succeeds if double withdrawing is possible", async () => {
        const Account = await ethers.getContractFactory("Account");
        const account = await Account.deploy();
        await account.deployed();

        await account.deposit(BigNumber.from("100"));
        //expect(await account.balance()).to.equal(BigNumber.from("100"))
        
        await account.withdraw(BigNumber.from("50"));
        await account.withdraw(BigNumber.from("40"));


        expect(await account.balance()).to.equal(BigNumber.from("10"))
    })

    it("succeeds if underflow is catched", async () => {
        const Account = await ethers.getContractFactory("Account");
        const account = await Account.deploy();
        await account.deployed();

        await account.deposit(BigNumber.from("100"));
        //expect(await account.balance()).to.equal(BigNumber.from("100"))
        
        await account.withdraw(BigNumber.from("50"));
        await expect(account.withdraw(BigNumber.from("60"))).to.revertedWith("Underflow");
    })
});

