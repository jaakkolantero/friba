import React, { Component } from "react";

import Navbar from "./components/components/navbar/Navbar";
import NavbarBrand from "./components/components/navbar/NavbarBrand";
import NavbarBurger from "./components/components/navbar/NavbarBurger";
import NavbarEnd from "./components/components/navbar/NavbarEnd";
import NavbarItem from "./components/components/navbar/NavbarItem";
import NavbarMenu from "./components/components/navbar/NavbarMenu";

import Counter from "./components/friba/Counter";
import CounterWithTitle from "./components/friba/CounterWithTitle";

import InputWithTitle from "./components/form/InputWithTitle";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar modifier="is-primary">
          <NavbarBrand>
            <NavbarItem>Friba</NavbarItem>
            <NavbarBurger />
          </NavbarBrand>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default App;
