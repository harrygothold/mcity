import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./resources/css/app.css";
import { BrowserRouter } from "react-router-dom";
import { firebase } from './firebase'

const App = (props) => (
  <BrowserRouter>
    <Routes {...props}  />
  </BrowserRouter>
);

firebase.auth().onAuthStateChanged().then((user) => {
  ReactDOM.render(<App user={user} />, document.getElementById("root"));
}).catch(err => console.error(err));


