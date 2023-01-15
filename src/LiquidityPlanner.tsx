import * as React from "react";
import "./assets/styles.css";
import { CellChange, NumberCell, ReactGrid } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import { getColumns } from "./getColumns";
import { getRows, CREDITLINE_ROW_ID, CASHBOXBANK_ROW_ID } from "./getRows";
import { inflows as emptyInflows, outflows as emptyOutflows } from "./rawData";
import {
  CashInflow,
  CashOutflow,
  InputVariables,
  OutputVariables
} from "./interfaces";
import { Bar } from "react-chartjs-2";
import { getChartData, chartOptions } from "./chart";
import { calculateOutputVariables } from "./plannerOutputVariables";

const applyChange = (change: CellChange<NumberCell>) => <
  K extends CashInflow | CashOutflow
>(
  groups: Array<K>
) =>
  groups.map((group) =>
    group.title === change.rowId
      ? {
          ...group,
          values: group.values.map((value, idx) =>
            change.columnId === idx + 1 ? change.newCell.value : value
          )
        }
      : group
  );

export const LiquidityPlanner: React.FC = () => {
  const [openingBalance, setOpeningBalance] = React.useState(10000);
  const [creditLine, setCreditLine] = React.useState(3000);
  const [cashInflow, setCashInflow] = React.useState(() => [...emptyInflows]);
  const [cashOutflow, setCashOutflow] = React.useState(() => [
    ...emptyOutflows
  ]);

  const columns = getColumns();
  const inputVariables: InputVariables = {
    cashInflow,
    cashOutflow,
    openingBalance,
    creditLine
  };

  const outputVariables = calculateOutputVariables(inputVariables);
  const plannerData: InputVariables & OutputVariables = {
    ...inputVariables,
    ...outputVariables
  };

  const rows = getRows(plannerData);

  const handleChanges = (changes: CellChange[]) => {
    changes.forEach((change: CellChange<NumberCell>) => {
      if (change.rowId === CASHBOXBANK_ROW_ID && change.columnId === 1) {
        setOpeningBalance(change.newCell.value);
      }
      if (change.rowId === CREDITLINE_ROW_ID && change.columnId === 1) {
        setCreditLine(change.newCell.value);
      }
      setCashInflow((cashInflow) => applyChange(change)(cashInflow));
      setCashOutflow((cashOutflow) => applyChange(change)(cashOutflow));
    });
  };

  return (
    <>
      <div style={{ width: 1523 }} className="liquidity-planner-app">
        <Bar
          data={getChartData(plannerData)}
          options={chartOptions}
          height={50}
        />
        <ReactGrid
          rows={rows}
          columns={columns}
          onCellsChanged={handleChanges}
          stickyTopRows={1}
          stickyLeftColumns={1}
          stickyRightColumns={1}
          // props below are availble for PRO version
          enableFillHandle
          enableRangeSelection
        />
      </div>
    </>
  );
};
