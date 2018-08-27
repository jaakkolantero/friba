import * as React from "react";
import Header from "./layout/Header";
import Router from "./layout/Router";

class Layout extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <Router />
      </React.Fragment>
    );
  }
}

export default Layout;
