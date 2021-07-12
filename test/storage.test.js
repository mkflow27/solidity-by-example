const {expect} = require("chai");

describe("Storage", function() {
    it("Checks the contract for its storage variables and working functions", async function (){
        const Storage = await ethers.getContractFactory("SimpleStorage");
        const storage = await Storage.deploy();
        await storage.deployed();

        //test the initial state variable
        expect(await storage.num()).to.equal(0);

        //preparare set transaction
        setNumTx = await storage.set(1)
        await setNumTx.wait();
        expect(await storage.num()).to.equal(1);

        //make sure that transaction fails with
        setNumTx = await storage.set(2);
        await setNumTx.wait();
        expect(await storage.get()).to.equal(2);
    });
    it("checks variables via get transaction", async function (){
        const Storage = await ethers.getContractFactory("SimpleStorage");
        const storage = await Storage.deploy();
        await storage.deployed();

        //make sure that transaction fails with
        setNumTx = await storage.set(2);
        await setNumTx.wait();
        expect(await storage.get()).to.equal(2);
    });
})