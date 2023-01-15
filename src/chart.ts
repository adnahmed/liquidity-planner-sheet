import { ChartOptions, ChartData } from "chart.js";
import { InputVariables, OutputVariables } from "./interfaces";

export const getChartData = (
  plannerData: InputVariables & OutputVariables
): ChartData => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  datasets: [
    {
      label: "Cashbox/bank",
      borderColor: "purple",
      type: "line",
      fill: false,
      lineTension: 0,
      data: plannerData.cashboxBank.map((value) => value),
      pointRadius: 4,
      borderWidth: 2
    },
    {
      label: "Monthly inflow",
      borderColor: "rgb(16 124 65 / 100%)",
      backgroundColor: "rgb(16 124 65 / 50%)",
      fill: false,
      stack: "1",
      barPercentage: 0.5,
      data: plannerData.monthlyInflowTotals.map((value) => value),
      borderWidth: 1
    },
    {
      label: "Monthly outflow",
      borderColor: "rgba(39, 151, 255, 1)",
      backgroundColor: "rgba(39, 151, 255, 0.5)",
      stack: "2",
      fill: true,
      barPercentage: 0.5,
      data: plannerData.monthlyOutflowTotals.map((value) => value),
      borderWidth: 1
    },
    {
      label: "Credit Line Overdraft",
      borderColor: "#CF1322",
      type: "line",
      fill: false,
      lineTension: 0,
      data: plannerData.cumulativeTotals.map((value, idx) => {
        const overdraft =
          -value - (isNaN(plannerData.creditLine) ? 0 : plannerData.creditLine);
        return overdraft > 0 ? overdraft : NaN;
      })
    }
  ]
});

export const chartOptions: ChartOptions = {
  legend: {
    display: true
  },
  elements: {
    line: {
      tension: 0.1
    }
  },
  responsive: true,
  plugins: {
    filler: {
      propagate: true
    }
  },
  layout: {
    padding: {
      left: 145
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        ticks: {
          autoSkip: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};
