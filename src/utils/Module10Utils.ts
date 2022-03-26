
export default class Module10 {

    calculate(block: String): number {
        const valueSubstractWithResult: { [key: string]: number } = {
            "1": 20,
            "2": 30,
            "3": 40,
            "4": 50,
            "5": 60,
            "6": 70,
            "7": 80,
            "8": 90
        };
        let multiplier = 2
        let result = 0
        for (let index = (block.length - 1); index >= 0; index -= 1) {
            const item: number = parseInt(block[index])
            let resultItem: number = item * multiplier;
    
            if (resultItem > 9) {
                const resultSplited = resultItem.toString().split("");
                // @ts-ignore
                resultItem = resultSplited.reduce((previousValue, currentValue) => {
                    return parseInt(previousValue) + parseInt(currentValue);
                })
            }
    
            result += resultItem;
    
            if (multiplier == 2) {
                multiplier = 1
            } else {
                multiplier = 2
            }
        }
    
        const firstNumberResult = result.toString()[0]
        const valueUsedToSubtract: number = valueSubstractWithResult[firstNumberResult]
    
        return valueUsedToSubtract - result;
    }
}