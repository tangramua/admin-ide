import * as Logger from 'bunyan';
import { injectable, inject } from 'inversify';

import { config } from '../../config';
import { Google } from './api/Google';
import { IPricingService, IPriceRow } from '../../interfaces';

@injectable()
export class PricingLocalService implements IPricingService {
    private logger: Logger;

    /** TODO: Inject cache service */
    /** TODO: Move PricingAPI service to inversify */
    private _api = new Google(config.GOOGLE_API_KEY);

    constructor(
        @inject('Logger') logger: Logger,
    ) {
        this.logger = logger.child({ className: PricingLocalService });
    }

    public async get(input) {
        this.logger.info('Fetching pricing data for %o', input);
        return this._api.get(input);
    }

    public async list() {
        this.logger.info('Fetching all price rows...');
        return this._api.list();
    }
}
