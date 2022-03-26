import { NextFunction, Request } from "express";


export default (error: Error, request: Request, response: Response, next: NextFunction): void => {

    switch(error.name) {
        case "InvalidDataException": 
            // @ts-ignore 
            return response.status(error.getCode()).json({
                message: error.message
            })
        default:
            console.log(error);
            // @ts-ignore
            return response.status(500).json({
                message: "Oops!!! Ocorreu alguma erro na aplicação."
            })
    }
}