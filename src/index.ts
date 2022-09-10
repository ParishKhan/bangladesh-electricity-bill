import { prices, rangeType, BILLING_INFO } from "./data";
import { decideDecimal } from './utility';

enum ErrorMessages {
  INVALID_NUMBER = "Number must be greater then 1",
}

type TUnitPrice = {
  unit: number;
  price: number;
};

type TBill = {
  unitPrice: number;
  demandRate: number;
  load: number;
}

type TCalculateBill = {
  classType: string;
  unit: number;
  load?: number;
}

type TBillWithSteps = {
  range: Array<rangeType>,
  unit: number;
}

const unitPrice = ({unit, price}: TUnitPrice): number => {
  return unit * price;
};

const totalBill = ({unitPrice, demandRate, load = 1 }: TBill): number => {
  const costing = unitPrice + (demandRate * load);
  const vat = (costing * BILLING_INFO.vat) / 100;
  return costing + vat;
};

const billWithSteps = ({range, unit}: TBillWithSteps) => {
  let totalStepPrice = 0;

  if(unit <= BILLING_INFO.lifeLineUnit) {
    totalStepPrice += unitPrice({ unit, price: BILLING_INFO.lifeLinePrice });
  } else {
    range.forEach((step, index, arr) => {

      if(unit >= step.unit[1]) {
        totalStepPrice += Math.abs(step.unit[0] - step.unit[1]) * step.price;
      }
  
      if(unit <= step.unit[1]) {
        totalStepPrice += Math.abs(unit - step.unit[0]) * step.price;
        arr.length = 0;
      }
    });
  }

  return totalStepPrice;
}

const calculateBill = ({classType, unit, load}: TCalculateBill) => {
  let price;
  const bill = structuredClone(prices[classType]);

  if(bill.step && bill.range) {
    price = billWithSteps({range: bill.range, unit});
  } else {
    price = unitPrice({ unit, price: bill.flat });
  }
  
  const total = totalBill({ unitPrice: price, demandRate: bill.demand, load });

  return decideDecimal(total);
}

export { calculateBill }