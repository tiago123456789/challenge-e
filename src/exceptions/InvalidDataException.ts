import ApplicationException from "./ApplicationException";

export default class InvalidDataException extends ApplicationException {

    constructor(message: string, code = 400) {
        super(message, code)
        this.name = "InvalidDataException"
    }

}