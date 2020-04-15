import * as Logger from 'bunyan';
import { injectable, inject } from 'inversify';

import { config } from '../../config';
import { StripeGateway } from './gateway/stripe';
import { IPaymentService } from '../../interfaces';

@injectable()
export class PaymentLocalService implements IPaymentService {
    private logger: Logger;
    private gateway = new StripeGateway(config.STRIPE_PUBLISHABLE_KEY, config.STRIPE_SECRET_KEY);

    constructor(
        @inject('Logger') logger: Logger,
    ) {
        this.logger = logger.child({ className: PaymentLocalService });
    }

    public async charge(amount: number, customer: string): Promise<any> {
        return this.gateway.charge(parseInt((amount * 100 as any), null), customer);
    }

    public async refund(charge: string): Promise<any> {
        return this.gateway.refund(charge);
    }
}
