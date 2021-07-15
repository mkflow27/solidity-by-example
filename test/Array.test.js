const {expect} = require("chai");
const { BigNumber} = require("ethers");


describe("Tests array default values", () => {
    it("all default values", async () => {
        const Array = await ethers.getContractFactory("Array");
        const array = await Array.deploy()
        await array.deployed();

        expect(await array.arr2(0)).to.equal(1);

        //This part will fail due to a dynamic array being allocated memory
        //at runtime
        //expect(await array.get(1)).to.equal(1);

        //default values of the fixed size arraay
        expect(await(array.myFixedSizedArr(0))).to.equal(BigNumber.from(0));

        //initializing values of arr
        await array.push(1)
        expect(await array.arr(0)).to.equal(1)

        //remove entries for array
        await array.pop()
        //expect(await array.arr(0)).to.be.reverted;
    

    })
})

describe("Tests the compact array", () => {
    it("default values", async () => {
        const CompactArray = await ethers.getContractFactory("CompactArray");
        const compactArray = await CompactArray.deploy();
        await compactArray.deployed();

        await compactArray.test();
        expect(await compactArray.arr(0)).to.equal(BigNumber.from(1));
        expect(await compactArray.arr(1)).to.equal(BigNumber.from(4))
    })
})