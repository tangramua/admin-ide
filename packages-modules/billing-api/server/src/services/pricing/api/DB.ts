import { IPricingApi } from './IPricintApi';
import { TMachinePrice } from '../../../interfaces';

export class DB implements IPricingApi {
    public async get(input: TMachinePrice) {
        return null;
    }

    public async list() {
        return [];
    }
}
