import React from "react";
import Layout from "./Hoc/Layout";
import { Switch } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/auth";
import Dashboard from "./components/admin/Dashboard";
import PrivateRoute from './components/authRoutes/PrivateRoutes';
import PublicRoutes from "./components/authRoutes/PublicRoutes";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PublicRoutes restricted={false} path='/' exact component={Home} />
        <PublicRoutes restricted={true} path='/sign_in' exact component={SignIn} />
        <PrivateRoute {...props} path='/dashboard' exact component={Dashboard} />
      </Switch>
    </Layout>
  );
};

export default Routes;
