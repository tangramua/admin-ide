import * as StripeApi from 'stripe';
import { IStripeGateway } from './IStripeGatewat';

export class StripeGateway implements IStripeGateway {
    private stripe: StripeApi;

    constructor(
        private key: string,
        private secret: string,
    ) {
        this.stripe = new StripeApi(secret);
     }

    public async charge(amount: number, customer: string) {
        return this.stripe.charges.create({ amount, customer, currency: 'usd' });
    }

    public async refund(charge: string) {
        return this.stripe.charges.refund(charge);
    }
}
