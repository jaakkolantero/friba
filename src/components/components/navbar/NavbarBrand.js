import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NavbarBrand extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="navbar-brand">{children}</div>;
  }
}

NavbarBrand.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavbarBrand;
