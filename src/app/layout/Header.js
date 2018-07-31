import React, { PureComponent } from "react";

import Navbar from "components/components/navbar/Navbar";
import NavbarBrand from "components/components/navbar/NavbarBrand";
import NavbarBurger from "components/components/navbar/NavbarBurger";
import NavbarItem from "components/components/navbar/NavbarItem";

class Header extends PureComponent {
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

export default Header;
