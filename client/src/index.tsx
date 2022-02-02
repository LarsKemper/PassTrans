import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import IndexRouter from "./routes/index";
import { AlertContainer } from "./services/alert/AlertContainer";

ReactDOM.render(
  <React.StrictMode>
    <AlertContainer />
    <IndexRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
