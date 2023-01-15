export type MonthlyValues = number[];

export type Inflow =
  | "Sales"
  | "Other income"
  | "Loan disbursement"
  | "Private deposits/equity"
  | "Other incoming payments";

export type Outflow =
  | "Use of goods/materials"
  | "Personnel costs"
  | "Room costs / rent"
  | "Heating, electricity, water, gas"
  | "Marketing and advertisement"
  | "Vehicle costs (operational)"
  | "Traveling expenses"
  | "Telephone, Fax, Internet"
  | "Office supplies, packaging"
  | "Repairs, maintenance"
  | "Insurance (company)"
  | "Contributions and fees"
  | "Leasing"
  | "Advice and bookkeeping"
  | "Cost of capital / interest"
  | "Repayment (loan)";

export type Group<T> = {
  title: T;
  values: MonthlyValues;
};

export type CashInflow = Group<Inflow>;
export type CashOutflow = Group<Outflow>;

export interface InputVariables {
  cashInflow: CashInflow[];
  cashOutflow: CashOutflow[];
  openingBalance: number;
  creditLine: number;
}

export interface OutputVariables {
  cashboxBank: MonthlyValues;
  monthlyInflowTotals: MonthlyValues;
  monthlyOutflowTotals: MonthlyValues;
  yearlyInflowTotal: number;
  yearlyOutflowTotal: number;
  monthlyInflowOuflowDiffs: MonthlyValues;
  cumulativeTotals: MonthlyValues;
  yearlyInflowOuflowDiff: number;
}
