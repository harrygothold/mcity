import React from "react";
import Layout from "./Hoc/Layout";
import { Switch } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/auth";
import Dashboard from "./components/admin/Dashboard";
import PrivateRoute from "./components/authRoutes/PrivateRoutes";
import PublicRoutes from "./components/authRoutes/PublicRoutes";
import AdminMatches from "./components/admin/matches";
import MatchForm from "./components/admin/matches/MatchForm";
import AdminPlayers from "./components/admin/players";
import PlayerForm from "./components/admin/players/PlayerForm";
import TheTeam from "./components/theTeam";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PublicRoutes restricted={false} path="/" exact component={Home} />
        <PublicRoutes
          restricted={true}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoutes
          restricted={false}
          path="/the_team"
          exact
          component={TheTeam}
        />
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={MatchForm}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={MatchForm}
        />
        <PrivateRoute
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_players/add_players"
          exact
          component={PlayerForm}
        />
        <PrivateRoute
          {...props}
          path="/admin_players/add_players/:id"
          exact
          component={PlayerForm}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
