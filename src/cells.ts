import {
  DefaultCellTypes,
  CellStyle,
  NumberCell,
  TextCell
} from "@silevis/reactgrid";

export const emptyTextCell: TextCell = { type: "text", text: "" };

const numberFormat = new Intl.NumberFormat("de", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const textCell = (
  text: string,
  className = "",
  style?: CellStyle
): TextCell => ({ type: "text", text, className, style });

export const numberCell = (
  value: number,
  className = "",
  style?: CellStyle
): NumberCell => ({
  type: "number",
  value,
  className,
  style,
  format: numberFormat
});

export const nonEditable = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  nonEditable: true
});

export const showZero = (cell: NumberCell): NumberCell => ({
  ...cell,
  nanToZero: true,
  hideZero: false
});

export const bottomLine = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  style: {
    ...cell.style,
    border: {
      ...cell.style?.border,
      bottom: {
        width: "1px",
        color: "#A6A6A6",
        style: "solid"
      }
    }
  }
});

export const noSideBorders = (cell: DefaultCellTypes): DefaultCellTypes => ({
  ...cell,
  style: {
    ...cell.style,
    border: {
      ...cell.style?.border,
      left: {
        style: "none"
      },
      right: {
        style: "none"
      }
    }
  }
});

export function monthHeaderCell(
  month: string,
  additionalClassNames = ""
): DefaultCellTypes {
  return nonEditable(
    textCell(month, `text-lg font-bold ${additionalClassNames}`, {
      background: "#107C41",
      color: "white",
      border: {
        bottom: { style: "none" },
        left: { style: "none" },
        right: { style: "none" }
      }
    })
  );
}
