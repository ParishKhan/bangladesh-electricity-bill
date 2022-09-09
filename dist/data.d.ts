declare type bilingType = {
    [key: string]: {
        name: string;
        demand: number;
        step: boolean;
        flat?: number;
        offPeak?: number;
        peak?: number;
        superOffPeak?: number;
        lifeLine?: rangeType;
        range?: rangeType[];
    };
};
declare type rangeType = {
    unit: [number, number?];
    price: number;
};
declare const BILLING_INFO: {
    vat: number;
    lifeLineUnit: number;
    lifeLinePrice: number;
};
declare const prices: bilingType;
export { prices, BILLING_INFO };
export type { bilingType, rangeType };
