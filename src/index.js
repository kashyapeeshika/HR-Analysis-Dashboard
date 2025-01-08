import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Internal imports
import Home from "./screens/Home";
import About from "./screens/About";
import Contacts from "./screens/Contacts";
import Graphs from "./screens/Graphs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Graphs" element={<Graphs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Web vitals reporting
reportWebVitals();
