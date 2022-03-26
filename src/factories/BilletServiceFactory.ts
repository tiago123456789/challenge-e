import BilletService from "../services/BilletService";
import BilletUtils from "../utils/BilletUtil";
import Module10Utils from "../utils/Module10Utils";
import FactoryInterface from "./FactoryInterface";

export default class BilletServiceFactory implements FactoryInterface<BilletService> {

    make(data: { [key: string]: any; }): BilletService {
        return new BilletService(
            new Module10Utils(),
            new BilletUtils()
        )
    }

}