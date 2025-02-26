import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Internal imports
import App from "../src/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Web vitals reporting
reportWebVitals();
