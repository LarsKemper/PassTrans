import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IndexRouter from "./routes/index";
import { AlterContainer } from "./services/alert/AlertContainer";

ReactDOM.render(
  <React.StrictMode>
    <AlterContainer />
    <IndexRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
