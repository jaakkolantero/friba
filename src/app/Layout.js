import React, { Component } from "react";
import Router from "./layout/Router";
import Header from "./layout/Header";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router />
      </React.Fragment>
    );
  }
}

export default Layout;
