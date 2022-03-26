import { NextFunction, Request } from "express";
import logger from "../configs/Logger"

export default (error: Error, request: Request, response: Response, next: NextFunction): void => {
    switch(error.name) {
        case "InvalidDataException": 
            // @ts-ignore 
            return response.status(error.getCode()).json({
                message: error.message
            })
        default:
            logger.error(error.message)
            // @ts-ignore
            return response.status(500).json({
                message: "Oops!!! Ocorreu alguma erro na aplicação."
            })
    }
}