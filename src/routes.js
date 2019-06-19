import React from "react";
import Layout from "./Hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/auth";
import Dashboard from "./components/admin/Dashboard";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/sign_in' exact component={SignIn} />
        <Route path='/dashboard' exact component={Dashboard} />
      </Switch>
    </Layout>
  );
};

export default Routes;
