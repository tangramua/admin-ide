import { IPriceRow, TMachinePrice } from '../../../interfaces';

export interface IPricingApi {
    list(): Promise<IPriceRow[]>;
    get(input: TMachinePrice): Promise<IPriceRow>;
}
