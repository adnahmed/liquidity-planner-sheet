import { months } from "./helpers";
import { CashInflow, CashOutflow, MonthlyValues } from "./interfaces";

const emptyMonthsValues: MonthlyValues = [
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN
];

const toFixed = (n: number, fixed: number) =>
  ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);

function generateRandomValues(value: number, variation: number): MonthlyValues {
  const min = value - variation;
  const max = value + variation;
  return months().map(() => toFixed(Math.random() * (max - min + 1) + min, 2));
}

export const inflows: CashInflow[] = [
  {
    title: "Sales",
    values: generateRandomValues(32000, 5000)
  },
  {
    title: "Loan disbursement",
    values: generateRandomValues(5000, 1000)
  },
  {
    title: "Private deposits/equity",
    values: generateRandomValues(500, 500)
  },
  {
    title: "Other incoming payments",
    values: generateRandomValues(7000, 100)
  },
  {
    title: "Other income",
    values: emptyMonthsValues
  }
];

export const outflows: CashOutflow[] = [
  {
    title: "Use of goods/materials",
    values: generateRandomValues(2000, 100)
  },
  {
    title: "Heating, electricity, water, gas",
    values: generateRandomValues(1000, 100)
  },
  {
    title: "Personnel costs",
    values: generateRandomValues(1000, 100)
  },
  {
    title: "Room costs / rent",
    values: generateRandomValues(7000, 100)
  },
  {
    title: "Marketing and advertisement",
    values: generateRandomValues(5000, 500)
  },
  {
    title: "Vehicle costs (operational)",
    values: generateRandomValues(3000, 1900)
  },
  {
    title: "Traveling expenses",
    values: generateRandomValues(5000, 500)
  },
  {
    title: "Telephone, Fax, Internet",
    values: generateRandomValues(5000, 500)
  },
  {
    title: "Office supplies, packaging",
    values: generateRandomValues(5000, 500)
  },
  {
    title: "Repairs, maintenance",
    values: generateRandomValues(1000, 500)
  },
  {
    title: "Insurance (company)",
    values: generateRandomValues(5000, 500)
  },
  {
    title: "Contributions and fees",
    values: generateRandomValues(1000, 500)
  },
  {
    title: "Leasing",
    values: generateRandomValues(1000, 500)
  },
  {
    title: "Advice and bookkeeping",
    values: generateRandomValues(5000, 0)
  },
  {
    title: "Cost of capital / interest",
    values: generateRandomValues(1000, 500)
  },
  {
    title: "Repayment (loan)",
    values: generateRandomValues(1000, 500)
  }
];
