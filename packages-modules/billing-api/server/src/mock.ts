import { IPriceRow } from './interfaces';
import { MachineConfig } from './constants';

export const GCE_PRICES: IPriceRow[] = [
    { hourly: 0.0475, machine: MachineConfig.MStandard1 },
    { hourly: 0.0950, machine: MachineConfig.MStandard2 },
    { hourly: 0.1900, machine: MachineConfig.MStandard4 },
    { hourly: 0.3800, machine: MachineConfig.MStandard8 },
    { hourly: 0.7600, machine: MachineConfig.MStandard16 },
    { hourly: 1.5200, machine: MachineConfig.MStandard32 },
];
