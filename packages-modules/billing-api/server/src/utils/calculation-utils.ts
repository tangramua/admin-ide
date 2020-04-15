import { ICalculationUnit, ECalculationUnitType } from '../interfaces';

export function percents(input: number, prs: number): number {
    const p = input / 100;
    return p * prs;
}

export function calculate(value: number = 0, cu: ICalculationUnit): number {
    switch (cu.type) {
        case ECalculationUnitType.Amount:
            return value + cu.value;
        default:
            return value + percents(value, cu.value);
    }
}
