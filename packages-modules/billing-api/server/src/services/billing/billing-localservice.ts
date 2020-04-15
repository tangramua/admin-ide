import * as Logger from 'bunyan';
import { injectable, inject } from 'inversify';

import {
    TMachinePrice, ICalculationUnit,
    ICalculationParameters, IPriceRow,
    IBillingService, IMachineConfigRow, IPricingService, IPaymentService,
} from '../../interfaces';
import { ETypes } from '../../constants';
import { BillingAbstractService } from './billing-abstract';

@injectable()
export class BillingLocalService extends BillingAbstractService implements IBillingService {
    private logger: Logger;

    constructor(
        @inject('Logger') logger: Logger,
        @inject(ETypes.PricingService) private pricing: IPricingService,
        @inject(ETypes.PaymentService) private payment: IPaymentService,
    ) {
        super();
        this.logger = logger.child({ className: BillingLocalService });
    }

    public async table(params: ICalculationParameters) {
        return this.pricing.list();
    }

    public async price(input: TMachinePrice) {
        return this.pricing.get(input);
    }

    public async charge(amount: number, customer: string) {
        return this.payment.charge(amount, customer);
    }
}
