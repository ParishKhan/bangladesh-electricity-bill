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
}

const BILLING_INFO = {
  vat: 5,
  lifeLineUnit: 50,
  lifeLinePrice: 3.75
}

const prices: bilingType = Object.freeze({
  "LT-A": {
    name: "Residential",
    demand: 30,
    step: true,
    range: [
      {
        unit: [0, 75],
        price: 4.19,
      },
      {
        unit: [75, 200],
        price: 5.72,
      },
      {
        unit: [200, 300],
        price: 6.0,
      },
      {
        unit: [300, 400],
        price: 6.34,
      },
      {
        unit: [400, 600],
        price: 9.94,
      },
      {
        unit: [600, 99999999999],
        price: 11.46,
      },
    ],
  },
  "LT-B": {
    name: "Agricultural pumps",
    demand: 30,
    step: false,
    flat: 4.16,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-C1": {
    name: "Retail Industry",
    demand: 30,
    step: false,
    flat: 8.53,
    offPeak: 7.68,
    peak: 10.24,
    superOffPeak: null,
  },
  "LT-C2": {
    name: "Construction",
    demand: 100,
    step: false,
    flat: 12.0,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D1": {
    name: "Educational, Religious and Charitable Institutions and Hospitals",
    demand: 35,
    step: false,
    flat: 6.02,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D2": {
    name: "Street lights and water pumps",
    demand: 60,
    step: false,
    flat: 7.7,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
  "LT-D3": {
    name: "Battery charging station",
    demand: 60,
    step: false,
    flat: 7.64,
    offPeak: 6.88,
    peak: 9.55,
    superOffPeak: 6.11,
  },
  "LT-E": {
    name: "Commercial and Office",
    demand: 60,
    step: false,
    flat: 10.3,
    offPeak: 9.27,
    peak: 12.36,
    superOffPeak: null,
  },
  "LT-T": {
    name: "Temporary",
    demand: 100,
    step: false,
    flat: 16.0,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
});

export { prices, BILLING_INFO };
export type { bilingType, rangeType };