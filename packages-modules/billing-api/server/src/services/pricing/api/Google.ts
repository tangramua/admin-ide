import * as _ from 'lodash';
import { IPricingApi } from './IPricintApi';
import { TMachinePrice, IPriceRow } from '../../../interfaces';

// TBD. Mock prices.
import { GCE_PRICES } from '../../../mock';

export class Google implements IPricingApi {
    constructor(private _key: string) {  }

    public async get(input: TMachinePrice) {
        let q;
        if (_.isString(input)) {
            q = { id: input };
        } else {
            q = _.pick(input, ['ram', 'cpu']);
        }

        return _.find<IPriceRow>(GCE_PRICES, { machine: q });
    }

    public async list() {
        return GCE_PRICES;
    }
}
