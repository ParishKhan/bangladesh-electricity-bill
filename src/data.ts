type bilingType = {
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

type rangeType = {
  unit: [number, number?];
  price: number;
};

const BILLING_INFO = {
  vat: 5,
  lifeLineUnit: 50,
  lifeLinePrice: 4.63,
};

const prices: bilingType = Object.freeze({
  "LT-A": {
    name: "Residential",
    demand: 42,
    step: true,
    range: [
      {
        unit: [0, 75],
        price: 5.26,
      },
      {
        unit: [75, 200],
        price: 7.2,
      },
      {
        unit: [200, 300],
        price: 7.59,
      },
      {
        unit: [300, 400],
        price: 8.02,
      },
      {
        unit: [400, 600],
        price: 12.67,
      },
      {
        unit: [600, 99999999999],
        price: 14.61,
      },
    ],
  },
  "LT-B": {
    name: "Agricultural pumps",
    demand: 42,
    step: false,
    flat: 5.25,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-C1": {
    name: "Retail Industry",
    demand: 48,
    step: false,
    flat: 10.76,
    offPeak: 9.68,
    peak: 12.95,
    superOffPeak: null,
  },
  "LT-C2": {
    name: "Construction",
    demand: 120,
    step: false,
    flat: 15.15,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D1": {
    name: "Educational, Religious and Charitable Institutions and Hospitals",
    demand: 60,
    step: false,
    flat: 7.55,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D2": {
    name: "Street lights and water pumps",
    demand: 90,
    step: false,
    flat: 9.71,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D3": {
    name: "Battery charging station",
    demand: 90,
    step: false,
    flat: 9.62,
    offPeak: 8.66,
    peak: 12.14,
    superOffPeak: 7.68,
  },
  "LT-E": {
    name: "Commercial and Office",
    demand: 90,
    step: false,
    flat: 13.01,
    offPeak: 11.71,
    peak: 15.62,
    superOffPeak: null,
  },
  "LT-T": {
    name: "Temporary",
    demand: 120,
    step: false,
    flat: 20.17,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
});

export { prices, BILLING_INFO };
export type { bilingType, rangeType };
