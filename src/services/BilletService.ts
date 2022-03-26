import DigitableLineResultDto from "../dtos/DigitableLineResultDto";
import InvalidDataException from "../exceptions/InvalidDataException";
import BilletUtils from "../utils/BilletUtil";
import Module10 from "../utils/Module10Utils";

export default class BilletService {

    private static VALUE_CURRENCY_REAL: number = 9

    constructor(
        private module10: Module10,
        private billetUtil: BilletUtils
    ) { }

    private isValid(line: string) {
        return new Promise((resolve, reject) => {
            const isOnlyNumbers = /^([0-9])+$/.test(line)
            if (!isOnlyNumbers) {
                throw new InvalidDataException("Linha digital aceita apenas números")
            }
    
            const currency = line[3]
            if (parseInt(currency) != BilletService.VALUE_CURRENCY_REAL) {
                throw new InvalidDataException("Linha digital está inválida")
            }
    
            if (line.length !== 47 && line.length !== 48) {
                throw new InvalidDataException("Linha digital está inválida")
            }
    
            const block1 = line.substr(0, 9)
            const block1DV = line.substr(9, 1)
    
            const block2 = line.substr(10, 10)
            const block2DV = line.substr(20, 1)
    
            const block3 = line.substr(21, 10)
            const block3DV = line.substr(31, 1)
    
            if (
                parseInt(block1DV) !== this.module10.calculate(block1) ||
                parseInt(block2DV) !== this.module10.calculate(block2) ||
                parseInt(block3DV) !== this.module10.calculate(block3)
            ) {
                throw new InvalidDataException("Linha digital tem DV inválidos")
            }

            resolve(true)
        })
        
    }

    async getDataDigitableLine(line: string): Promise<DigitableLineResultDto> {
        await this.isValid(line);

        return new DigitableLineResultDto(
            this.billetUtil.getCodeBar(line),
            this.billetUtil.getAmount(line),
            this.billetUtil.getExpirationDate(line),
        )
    }
}