import * as React from "react";
import { render } from "react-dom";
import { LiquidityPlanner } from "./LiquidityPlanner";
import logo from "./assets/reactgrid-logo.jpg";

render(
  <div className="liquidity-planner-app">
    <p style={{ fontSize: "12x" }}>
      This sample app uses the <b>ReactGrid MIT</b>,<br /> check out fully
      functional example based on the ⭐<b>ReactGrid PRO</b>⭐{" "}
      <a
        href="http://reactgrid.com/examples/?example=liquidity-planner"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
    </p>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start"
      }}
    >
      <h1 style={{ marginBottom: "0px" }}>Financial liquidity planner</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        made with{" "}
        <img src={logo} style={{ maxHeight: "1.8em" }} alt="reactgrid logo" />
      </div>
    </div>

    <LiquidityPlanner />
  </div>,
  document.getElementById("root")
);
