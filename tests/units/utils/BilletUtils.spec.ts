import BilletUtils from "../../../src/utils/BilletUtil"

describe("BilletUtils", () => {

    it(
        "Should be return amount 20.00 when informated line 21290001192110001210904475617405975870000002000",
        () => {
            const billetUtils = new BilletUtils();
            const amount = billetUtils.getAmount("21290001192110001210904475617405975870000002000")
            expect("20.00").toBe(amount)
        })

        it(
            "Should be return amount 20.00 when informated line different 21290001192110001210904475617405975870000002000",
            () => {
                const billetUtils = new BilletUtils();
                const amount = billetUtils.getAmount("00190000090327742002664073922177889350000043694")
                expect("20.00").not.toBe(amount)
            })
})