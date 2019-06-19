import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/auth";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/sign_in' exact component={SignIn} />
      </Switch>
    </Layout>
  );
};

export default Routes;
