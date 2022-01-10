import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./Features/Deshboard/Login";
import {SignIn} from "./Features/SignIn/SignIn";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
