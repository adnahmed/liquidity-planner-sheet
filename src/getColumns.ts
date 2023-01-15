import { Column } from "@silevis/reactgrid";

const COL_WIDTH = 110;

export function getColumns(): Column[] {
  return [
    {
      columnId: "titlesColumn",
      width: 200
    },
    { columnId: 1, width: COL_WIDTH },
    { columnId: 2, width: COL_WIDTH },
    { columnId: 3, width: COL_WIDTH },
    { columnId: 4, width: COL_WIDTH },
    { columnId: 5, width: COL_WIDTH },
    { columnId: 6, width: COL_WIDTH },
    { columnId: 7, width: COL_WIDTH },
    { columnId: 8, width: COL_WIDTH },
    { columnId: 9, width: COL_WIDTH },
    { columnId: 10, width: COL_WIDTH },
    { columnId: 11, width: COL_WIDTH },
    { columnId: 12, width: COL_WIDTH },
    {
      columnId: "Totals",
      width: 120
    }
  ];
}
