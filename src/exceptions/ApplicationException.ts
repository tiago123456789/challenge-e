
export default class ApplicationException extends Error {

    private code: number;
    public name: string;

    constructor(message: string, code = 400) {
        super(message)
        this.code = code;
        this.name = "InvalidDataException"
    }

    public getCode(): number {
        return this.code;
    }
}