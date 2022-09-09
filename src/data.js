const billing = {
  "LT-A": {
    name: "Residential",
    demand: 30,
    step: true,
    range: [
      {
        unit: [0,50],
        price: 3.75
      },
      {
        unit: [1,75],
        price: 4.19
      },
      {
        unit: [76,200],
        price: 5.72
      },{
        unit: [201,300],
        price: 6.00
      },
      {
        unit: [301,400],
        price: 6.34
      },
      {
        unit: [401,600],
        price: 9.94
      },
      {
        unit: [600],
        price: 11.46
      }
    ]
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
    flat: 12.00,
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
    flat: 7.70,
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
    flat: 10.30,
    offPeak: 9.27,
    peak: 12.36,
    superOffPeak: null,
  },
  "LT-T": {
    name: "Temporary",
    demand: 100,
    step: false,
    flat: 16.00,
    offPeak: null,
    peak: null,
    superOffPeak: null,
  },
};
