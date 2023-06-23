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
  lifeLinePrice: 4.35,
};

const prices: bilingType = Object.freeze({
  "LT-A": {
    name: "Residential",
    demand: 35,
    step: true,
    range: [
      {
        unit: [0, 75],
        price: 4.85,
      },
      {
        unit: [75, 200],
        price: 6.63,
      },
      {
        unit: [200, 300],
        price: 6.95,
      },
      {
        unit: [300, 400],
        price: 7.34,
      },
      {
        unit: [400, 600],
        price: 11.51,
      },
      {
        unit: [600, 99999999999],
        price: 13.26,
      },
    ],
  },
  "LT-B": {
    name: "Agricultural pumps",
    demand: 35,
    step: false,
    flat: 4.82,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-C1": {
    name: "Retail Industry",
    demand: 40,
    step: false,
    flat: 9.88,
    offPeak: 8.88,
    peak: 11.85,
    superOffPeak: null,
  },
  "LT-C2": {
    name: "Construction",
    demand: 100,
    step: false,
    flat: 13.89,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D1": {
    name: "Educational, Religious and Charitable Institutions and Hospitals",
    demand: 50,
    step: false,
    flat: 6.97,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D2": {
    name: "Street lights and water pumps",
    demand: 75,
    step: false,
    flat: 8.91,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D3": {
    name: "Battery charging station",
    demand: 75,
    step: false,
    flat: 8.84,
    offPeak: 7.96,
    peak: 11.06,
    superOffPeak: 7.07,
  },
  "LT-E": {
    name: "Commercial and Office",
    demand: 75,
    step: false,
    flat: 11.93,
    offPeak: 10.73,
    peak: 14.31,
    superOffPeak: null,
  },
  "LT-T": {
    name: "Temporary",
    demand: 100,
    step: false,
    flat: 18.52,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
});

export { prices, BILLING_INFO };
export type { bilingType, rangeType };
