export interface IStripeGateway {
    refund(charge: string): Promise<any>;
    charge(amount: number, customer: string): Promise<any>;
}
