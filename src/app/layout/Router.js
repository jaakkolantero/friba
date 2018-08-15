import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NewGame from "./NewGame";
import Hole from "./Hole";
import Scorecard from "./Scorecard";

const Router = () => (
  <Switch>
    <Route exact path="/" component={NewGame} />
    <Route
      path="/hole/:id"
      render={props => <Hole key={props.match.params.id} {...props} />}
    />
    <Route path="/scorecard" component={Scorecard} />
  </Switch>
);
export default Router;
