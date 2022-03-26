import BilletEndpoint from "../endpoints/BilletEndpoint";
import BilletServiceFactory from "./BilletServiceFactory";
import FactoryInterface from "./FactoryInterface";


export default class BilletEndpointFactory implements FactoryInterface<BilletEndpoint> {
    
    make(data: { [key: string]: any; }): BilletEndpoint {
        return new BilletEndpoint(
            new BilletServiceFactory().make({})
        )
    }

}
 