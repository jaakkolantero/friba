import React from "react";
import { storiesOf } from "@storybook/react";

import Navbar from "../components/components/navbar/Navbar";
import NavbarBrand from "../components/components/navbar/NavbarBrand";
import NavbarBurger from "../components/components/navbar/NavbarBurger";
import NavbarDivider from "../components/components/navbar/NavbarDivider";
import NavbarDropdown from "../components/components/navbar/NavbarDropdown";
import NavbarEnd from "../components/components/navbar/NavbarEnd";
import NavbarItem from "../components/components/navbar/NavbarItem";
import NavbarLink from "../components/components/navbar/NavbarLink";
import NavbarMenu from "../components/components/navbar/NavbarMenu";
import NavbarStart from "../components/components/navbar/NavbarStart";

const stories = storiesOf("Navbar", module);

stories.add("Empty Navbar", () => <Navbar />);

stories.add("Navbar", () => (
  <Navbar modifier="is-primary">
    <NavbarBrand>
      <NavbarItem>brand</NavbarItem>
      <NavbarBurger />
    </NavbarBrand>
    <NavbarMenu>
      <NavbarStart>
        <NavbarItem>item1</NavbarItem>
      </NavbarStart>
      <NavbarEnd>
        <NavbarItem hasDropdown={true} isActive={true}>
          <NavbarLink>Dropdown</NavbarLink>
          <NavbarDropdown>
            <NavbarItem>in dropdown</NavbarItem>
            <NavbarDivider />
            <NavbarItem>in dropdown</NavbarItem>
          </NavbarDropdown>
        </NavbarItem>
        <NavbarItem>item3</NavbarItem>
        <NavbarItem to="https://terokoodaa.io">terokoodaa.io</NavbarItem>
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>
));
