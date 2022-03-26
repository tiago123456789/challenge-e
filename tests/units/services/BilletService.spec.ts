import BilletServiceFactory from "../../../src/factories/BilletServiceFactory"
import BilletService from "../../../src/services/BilletService"

describe("BilletService", () => {

    it("Should be throw exception when informate digitable line with currency value different 9", 
    () => {
        try {
            const billetService = new BilletServiceFactory().make({})
            billetService.getDataDigitableLine("00180000090327742002664073922177889350000043694")
        } catch(error: any) {
            expect(error.message).toBe("Linha digital está inválida")
        }
    })

    it("Should be throw exception when informate line with characters non numeric", 
    () => {
        try {
            const billetService = new BilletServiceFactory().make({})
            billetService.getDataDigitableLine("abcabc")
        } catch(error: any) {
            expect(error.message).toBe("Linha digital aceita apenas números")
        }
    })

    it("Should be throw exception when informate line exceed 47 or 48 characters", 
    () => {
        try {
            const billetService = new BilletServiceFactory().make({})
            billetService.getDataDigitableLine("00190000090327742002664073922177889350000043694000")
        } catch(error: any) {
            expect(error.message).toBe("Linha digital está inválida")
        }
    })


    it("Should be throw exception when informate line exceed 47 or 48 characters", 
    () => {
        try {
            const billetService = new BilletServiceFactory().make({})
            billetService.getDataDigitableLine("00190000090327742002664073922177889350000043694000")
        } catch(error: any) {
            expect(error.message).toBe("Linha digital está inválida")
        }
    })

    it("Should be throw exception when informate line with DV invalid", 
    () => {
        try {
            const billetService = new BilletServiceFactory().make({})
            billetService.getDataDigitableLine("21290001192110001210904475617406975870000002000")
        } catch(error: any) {
            expect(error.message).toBe("Linha digital tem DV inválidos")
        }
    })
})