const { expect } = require("chai");

describe("Variables", function() {
    it("Tests the values of existing variables", async function() {
        const Variables = await ethers.getContractFactory("Variables");
        const variables = await Variables.deploy();
        await variables.deployed();

        //check the contracts state variables
        expect(await variables.text()).to.equal("Hello");
        expect(await variables.num()).to.equal(123);
        expect(await variables.num()).to.equal("123"); //This is interesting that the tests both pass. TODO: check
    })
})