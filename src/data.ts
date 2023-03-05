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
  lifeLinePrice: 4.14,
};

const prices: bilingType = Object.freeze({
  "LT-A": {
    name: "Residential",
    demand: 35,
    step: true,
    range: [
      {
        unit: [0, 75],
        price: 4.62,
      },
      {
        unit: [75, 200],
        price: 6.31,
      },
      {
        unit: [200, 300],
        price: 6.62,
      },
      {
        unit: [300, 400],
        price: 6.99,
      },
      {
        unit: [400, 600],
        price: 10.96,
      },
      {
        unit: [600, 99999999999],
        price: 12.63,
      },
    ],
  },
  "LT-B": {
    name: "Agricultural pumps",
    demand: 35,
    step: false,
    flat: 4.59,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-C1": {
    name: "Retail Industry",
    demand: 40,
    step: false,
    flat: 9.41,
    offPeak: 8.46,
    peak: 11.29,
    superOffPeak: null,
  },
  "LT-C2": {
    name: "Construction",
    demand: 100,
    step: false,
    flat: 13.23,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D1": {
    name: "Educational, Religious and Charitable Institutions and Hospitals",
    demand: 50,
    step: false,
    flat: 6.64,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D2": {
    name: "Street lights and water pumps",
    demand: 75,
    step: false,
    flat: 8.49,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D3": {
    name: "Battery charging station",
    demand: 75,
    step: false,
    flat: 8.42,
    offPeak: 7.58,
    peak: 10.53,
    superOffPeak: 6.74,
  },
  "LT-E": {
    name: "Commercial and Office",
    demand: 75,
    step: false,
    flat: 11.36,
    offPeak: 10.22,
    peak: 13.63,
    superOffPeak: null,
  },
  "LT-T": {
    name: "Temporary",
    demand: 100,
    step: false,
    flat: 17.64,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
});

export { prices, BILLING_INFO };
export type { bilingType, rangeType };
