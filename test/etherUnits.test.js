const { expect } = require("chai");

describe("Tests ether units", function() {
    it("Tests for ether units", async function() {
        const EtherUnits = await ethers.getContractFactory("EtherUnits");
        const etherUnits = await EtherUnits.deploy();
        await etherUnits.deployed();

        expect(await etherUnits.oneWei()).to.equal(1);
        expect(await etherUnits.isOneWei()).to.equal(true);

        //expect(await etherUnits.oneEther()).to.equal(ethers.utils.parseEthers("1"));
        expect(await etherUnits.isOneEther()).to.equal(true);
    })
})