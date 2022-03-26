import { NextFunction, Request, Response } from "express";
import BilletService from "../services/BilletService";

export default class BilletEndpoint {

    constructor(
        private readonly billetService: BilletService
    ) {
        this.getDataDigitableLine = this.getDataDigitableLine.bind(this)
    }

    getDataDigitableLine(request: Request, response: Response, next: NextFunction) {
        try {
            const line = request.params.digitableLine
            const data = this.billetService.getDataDigitableLine(line)
            return response.json(data)
        } catch(error) {
            next(error);
        }
    }
}