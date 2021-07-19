const { expect} = require("chai")
const { BigNumber} = require("ethers");

describe("Test all function of the Structs contract", () => {
    it("succeeds if the create function works", async () => {
        const Todos = await ethers.getContractFactory("Todos");
        const todos = await Todos.deploy();
        await todos.deployed();


        //expect(await todos.todos(0)).to.be.reverted;
        await todos.create("clean")
        //console.log(await todos.get(0));

        //pushing a Todo to the todos array
        expect(await todos.get(0)).to.deep.equal(["clean", false])

        //key value mapping
        expect(await todos.get(1)).to.deep.equal(["clean", false])

        //initialize an empty struct in memory and update after
        expect(await todos.get(2)).to.deep.equal(["clean", false])
    }),
    it("succeeds if the public getter works", async () => {
        const Todos = await ethers.getContractFactory("Todos");
        const todos = await Todos.deploy();
        await todos.deployed();

        await todos.create("tidy")

        expect(await todos.todos(0)).to.deep.equal(["tidy", false])
    }),
    it("succeeds if the update function works", async () => {
        const Todos = await ethers.getContractFactory("Todos");
        const todos = await Todos.deploy();
        await todos.deployed();

        await todos.create("tidy");

        await todos.update(0, "shop");
        expect(await todos.todos(0)).to.deep.equal(["shop", false]);

        await todos.toggleCompleted(0);
        expect(await todos.todos(0)).to.deep.equal(["shop", true]);

    }),
    it("succeeds if the update function works", async () => {
        const Todos = await ethers.getContractFactory("Todos");
        const todos = await Todos.deploy();
        await todos.deployed();

        await todos.create("tidy");

        //await todos.update(0, "shop");
        //expect(await todos.todos(0)).to.deep.equal(["shop", false]);

        await todos.toggleCompleted(0);
        expect(await todos.todos(0)).to.deep.equal(["tidy", true]);
    })
})
