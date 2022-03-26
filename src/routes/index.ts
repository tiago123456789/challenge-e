import { Express } from "express"
import BilletEndpointFactory from "../factories/BilletEndpointFactory";
import handlerExceptionMiddleware from "../middlewares/HandlerExceptionMiddleware";

const billetEndpoint = new BilletEndpointFactory().make({});

export default (app: Express) => {

    app.get("/boletos/:digitableLine", billetEndpoint.getDataDigitableLine)

    // @ts-ignore
    app.use(handlerExceptionMiddleware);
}