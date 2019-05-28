import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./resources/css/app.css";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
