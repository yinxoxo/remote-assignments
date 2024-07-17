import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Assignment3App from "./assignment3/Assignment3App";
import Assignment4App from "./assignment4/Assignment4App";
import Assignment5App from "./assignment5/Assignment5App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/assignment3" element={<Assignment3App />} />
        <Route path="/assignment4" element={<Assignment4App />} />
        <Route path="/assignment5" element={<Assignment5App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
