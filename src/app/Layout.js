import React, { Component } from "react";
import Content from "./layout/Content";
import Header from "./layout/Header";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
    );
  }
}

export default Layout;
