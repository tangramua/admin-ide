export interface IPaymentService {
    refund(charge: string, amount: number): Promise<any>;
    charge(amount: number, customer: string): Promise<any>;
}
