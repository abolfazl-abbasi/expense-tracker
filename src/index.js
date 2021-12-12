import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.js";
import axios from "axios";
import "./services/httpServices.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
