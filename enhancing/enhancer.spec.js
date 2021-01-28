const enhancer = require('./enhancer.js');
// test away!

describe("enhancer unit tests",() => {
    it("repairs the item", () => {
        expect(enhancer.repair({
            name: "jossy",
            enhancement: 18,
            durability: 86,
        })).toEqual({
            name: "jossy",
            enhancement: 18,
            durability: 100,
        })
        expect(() => enhancer.repair({
            name: "owlspec",
            enhancement: 18,
            durability: 100,
        })).toThrow()
    })
    it("enhances the item success", () => {
        expect(enhancer.success({
            name:"jossy",
            enhancement: 18,
            durability: 100,
        })).toEqual({
            name:"jossy",
            enhancement:19,
            durability: 100,
        })
        expect(() => enhancer.success({
            name:"rumple",
            enhancement: 20,
            durability: 100,
        })).toThrow()
    })
    it("enhancement fails", () => {
        expect(enhancer.fail({
            name: "fixer",
            enhancement: 14,
            durability: 100,
        })).toEqual({
            name: "fixer",
            enhancement: 14,
            durability: 95,
        })
        expect(enhancer.fail({
            name: "jumaji",
            enhancement: 15,
            durability: 100,
        })).toEqual({
            name: "jumaji",
            enhancement: 15,
            durability: 90,
        })
        expect(enhancer.fail({
            name: "qadir",
            enhancement: 16,
            durability: 100,
        })).toEqual({
            name: "qadir",
            enhancement: 16,
            durability: 90,
        })
        expect(enhancer.fail({
            name: "rover",
            enhancement: 17,
            durability: 100,
        })).toEqual({
            name: "rover",
            enhancement: 16,
            durability: 100,
        })
    })
    it("gets the modified name", ()=> {
        expect(enhancer.get({
            name:"jumaji",
            enhancement: 16,
            durability: 100,
        })).toEqual({
            name:"[+16] jumaji",
            enhancement:16,
            durability:100,
        })
        expect(enhancer.get({
            name:"owlspec",
            enhancement: 20,
            durability: 100,
        })).toEqual({
            name:"[+20] owlspec",
            enhancement:20,
            durability:100,
        })
        expect(enhancer.get({
            name:"sting",
            enhancement: 1,
            durability: 100,
        })).toEqual({
            name:"[+1] sting",
            enhancement:1,
            durability:100,
        })
        expect(() => enhancer.get({
            name:"techtodd",
            enhancement: 0,
            durability: 100,
        })).toThrow()
    })
})