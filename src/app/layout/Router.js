import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NewGame from "./NewGame";
import Hole from "./Hole";

const Router = () => (
  <Switch>
    <Route exact path="/" component={NewGame} />
    <Route
      path="/hole/:id"
      render={props => <Hole key={props.match.params.id} {...props} />}
    />
  </Switch>
);
export default Router;
