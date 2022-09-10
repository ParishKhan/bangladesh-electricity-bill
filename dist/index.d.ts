declare type TCalculateBill = {
    classType: string;
    unit: number;
    load?: number;
};
declare const calculateBill: ({ classType, unit, load }: TCalculateBill) => number;
export { calculateBill };
