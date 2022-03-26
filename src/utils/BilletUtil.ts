
export default class BilletUtils {

    public getAmount(line: string): string {
        let value: any = line.substring(line.length - 10, line.length)
        let decimalDigits = value.substring(value.length - 2, value.length);
        value = value.substring(0, value.length - 2)
        value = parseInt(value);
        return `${value}.${decimalDigits}`
    }

    public getExpirationDate(line: string) {
        let expirationFactor: any = line.substring(line.length - 14, line.length - 10)
        const baseDate = new Date('1997-10-07 00:00:00Z')
        baseDate.setDate(baseDate.getDate() + parseInt(expirationFactor))

        const resetDate = new Date('2025-02-22 00:00:00Z')
        if (baseDate.getTime() >= resetDate.getTime()) {
            expirationFactor -= 1000;
            resetDate.setDate(resetDate.getDate() + expirationFactor)
            const yearMonthDay = resetDate.toISOString().split("T")[0]
            return yearMonthDay
        }

        const yearMonthDay = baseDate.toISOString().split("T")[0]
        return yearMonthDay
    }

    public getCodeBar(line: string) {
        const bank = line.substr(0, 3)
        const currency = line.substr(3, 1)
        const codeBarDV = line.substr(line.length - 15, 1)
        const dueFactor = line.substr(line.length - 14, 4)
        const value = line.substr(line.length - 10, 10)
        const position20To24 = line.substring(4, 9)
        const position25To24 = line.substring(10, 20)
        const position35To44 = line.substring(21, 31)
        return (`${bank}${currency}${codeBarDV}${dueFactor}${value}${position20To24}${position25To24}${position35To44}`)
    }
    
}