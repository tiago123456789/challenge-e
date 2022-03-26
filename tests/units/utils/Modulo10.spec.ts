import Module10 from "../../../src/utils/Module10Utils"


describe("Module10Utils", () => {

    it("Should be return DV 9 when informate 212900011", () => {
        const module10Utils = new Module10();
        const dv = module10Utils.calculate("212900011")
        expect(dv).toBe(9);
    })

    it("Should be return DV differente value 9 when informate block differente value 212900011", () => {
        const module10Utils = new Module10();
        const dv = module10Utils.calculate("212900010")
        expect(dv).not.toBe(9);
    })
})