import { IMachineConfigRow } from './interfaces';

export enum EGoogleConstants {
    GCEService = '6F81-5844-456A',
}

export enum EGoogleResourceGroup {
    CPU = 'CPU',
    GPU = 'GPU',
    RAM = 'RAM',
    N1Highmem = 'N1Highmem',
    N1Highcpu = 'N1Highcpu',
    N1Standard = 'N1Standard',
}

export enum EGoogleResourceFamily {
    Network = 'Network',
    License = 'License',
    Compute = 'Compute',
    Storage = 'Storage',
}

export enum HemeraTopics {
    Billing = 'Billing',
}

export enum HemeraCommands {
    Charge = 'charge',
}

export enum ETypes {
    BillingService = 'BillingService',
    PaymentService = 'PaymentService',
    PricingService = 'PricingService',
    BillingReportService = 'BillingReportService',

    PricingApi = 'PricingApi',
    PaymentGateway = 'PaymentGateway',

    PricesRepository = 'PricesRepository',
    BillingReportsRepository = 'BillingReportsRepository',
}

export interface IMachinesValues {
    [propName: string]: IMachineConfigRow;
}

export const MachineConfig: IMachinesValues = {
    HCpu2: { id: 'n1-highcpu-2', cpu: 2, ram: 1800 },
    HCpu4: { id: 'n1-highcpu-4', cpu: 4, ram: 3600 },
    HCpu8: { id: 'n1-highcpu-8', cpu: 8, ram: 7200 },
    HCpu16: { id: 'n1-highcpu-16', cpu: 16, ram: 14400 },
    HCpu32: { id: 'n1-highcpu-32', cpu: 32, ram: 28800 },

    HRam2: { id: 'n1-highmem-2', cpu: 2, ram: 13000 },
    HRam4: { id: 'n1-highmem-4', cpu: 4, ram: 26000 },
    HRam8: { id: 'n1-highmem-8', cpu: 8, ram: 52000 },
    HRam16: { id: 'n1-highmem-16', cpu: 16, ram: 104000 },
    HRam32: { id: 'n1-highmem-32', cpu: 32, ram: 208000 },

    MStandard1: { id: 'n1-standard-1', cpu: 1, ram: 3750 },
    MStandard2: { id: 'n1-standard-2', cpu: 2, ram: 7500 },
    MStandard4: { id: 'n1-standard-4', cpu: 4, ram: 15000 },
    MStandard8: { id: 'n1-standard-8', cpu: 8, ram: 30000 },
    MStandard16: { id: 'n1-standard-16', cpu: 16, ram: 60000 },
    MStandard32: { id: 'n1-standard-32', cpu: 32, ram: 120000 },
};
