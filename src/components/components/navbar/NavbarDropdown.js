import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NavbarDropdown extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="navbar-dropdown">{children}</div>;
  }
}

NavbarDropdown.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavbarDropdown;
