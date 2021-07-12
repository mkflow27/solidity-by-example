const { expect } = require("chai")

describe("Tests all  functions and parameters of the Mapping contract", () => {
    it("Should test the default mapping parameters", async () => {
        const Mapping = await ethers.getContractFactory("Mapping");
        const mapping = await Mapping.deploy()
        await mapping.deployed();

        //check default values
        expect(await mapping.myMap("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488")).to.equal(0);

        expect(await mapping.get("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488")).to.equal("0");

        await mapping.set("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488", 1);
        expect(await mapping.get("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488")).to.equal(1);

        await mapping.remove("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488");
        expect(await mapping.get("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488")).to.equal(0);


    })
})

describe("get, set, remove nested Mapping items", () => {
    it("set, gets and removes items from a nested mapping", async () => {
        const NestedMapping = await ethers.getContractFactory("NestedMapping");
        const nestedMapping = await NestedMapping.deploy();
        await nestedMapping.deployed();

        //test default mappings
        expect(await nestedMapping.nested("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488", 0)).to.equal(false);

        expect(await nestedMapping.get("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488", 0)).to.equal(false)

        await nestedMapping.set("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488", 0, true)
        expect(await nestedMapping.get("0xA0bf0fC1d3f0231D0D2737B364B5ae72c57F4488", 0)).to.equal(true)
    })
})