import { injectable, inject } from 'inversify';

import {
    TMachinePrice, ICalculationUnit,
    ICalculationParameters, IPriceRow,
    IBillingService, IMachineConfigRow,
} from '../../interfaces';
import { BillingAbstractService } from './billing-abstract';

@injectable()
export class BillingMicroService extends BillingAbstractService implements IBillingService {
    public table(params: ICalculationParameters) {
        return Promise.resolve([]);
    }

    public price(input: TMachinePrice) {
        return Promise.resolve({} as any);
    }

    public charge(amount: number, customer: string) {
        return Promise.resolve(true);
    }

    public calculate(hours: number, machine: IMachineConfigRow, params: ICalculationParameters) {
        return Promise.resolve(0);
    }
}
