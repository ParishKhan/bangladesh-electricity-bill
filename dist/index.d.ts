import { BILL_TYPE } from "./constant";
declare type TCalculateBill = {
    classType: string;
    unit: number;
    load?: number;
};
declare type TResponse = {
    unitPrice: number;
    demand: number;
    vat: number;
    total: number;
    totalFinal: number;
};
declare const calculateBill: ({ classType, unit, load }: TCalculateBill) => TResponse;
export { calculateBill, BILL_TYPE };
