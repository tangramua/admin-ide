export type TRegion = string;

export interface IMachineConfigRow {
    id?: string;
    cpu: number;
    ram: number;
    hdd?: number;
    cost?: number;
    region?: TRegion;
}

export interface IPriceRow {
    hourly: number; // Hourly rate
    calculated?: number; // Calculated price with fees & discouts
    machine: IMachineConfigRow; // Machine config - spec, region, etc.
}

export enum ECalculationUnitType {
    Amount = 'amount',
    Percent = 'percent',
}

export interface ICalculationUnit {
    value: number;
    type: ECalculationUnitType;
}

export interface ICalculationFees {
    billing: ICalculationUnit;
    service: ICalculationUnit;
}

export interface ICalculationParameters {
    fees: ICalculationFees;
    discount: ICalculationUnit;
}

export type TMachinePrice = string | IMachineConfigRow;

/** Services  */

export interface IPricingService {
    list(): Promise<IPriceRow[]>;
    get(input: TMachinePrice): Promise<IPriceRow>;
}

export interface IBillingProcessRequest {
    hours: number;
    customer: string;
    workspace: string;
    machine: IMachineConfigRow;
    params?: ICalculationParameters;
}

export interface IBillingService {
    /**
     * Fetch price per node from Cloud Provider(GC)
     */
    price(input: TMachinePrice): Promise<IPriceRow>;
    /**
     * Calculate resources usage with additional params and charge from client
     */
    process(request: IBillingProcessRequest): Promise<any>;
    /**
     * Charge for computing node
     */
    charge(amount: number, customer: string): Promise<any>;
    /**
     * Get pricing table for computing nodes with additional params - discounts and fees
     */
    table(params: ICalculationParameters): Promise<IPriceRow[]>;
    /**
     * Get amount for calculation node for period
     */
    calculate(hours: number, machine: IMachineConfigRow, params?: ICalculationParameters): Promise<number>;
}
