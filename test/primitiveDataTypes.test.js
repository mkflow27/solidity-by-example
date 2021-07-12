const { expect } = require("chai")

describe("PrimitiveDataTypes", function (){
    it("Should test for primitive data types values and types", async function() {
        const PrimitiveDataTypes = await ethers.getContractFactory("Primitives"); //must be contract name
        const primitiveDataTypes = await PrimitiveDataTypes.deploy();
        await primitiveDataTypes.deployed()

        //expect(await primitiveDataTypes.boo()).to.equal(true);
        expect(await primitiveDataTypes.boo()).to.be.an('boolean');

        expect(await primitiveDataTypes.u8()).to.equal(1);
        expect(await primitiveDataTypes.u8()).to.be.an('number', 'tested value is not a number');
    })
})