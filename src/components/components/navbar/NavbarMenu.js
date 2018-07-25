import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NavbarMenu extends PureComponent {
  render() {
    const { children, isActive } = this.props;
    var className = isActive ? "navbar-menu is-active" : "navbar-menu";
    return <div className={className}>{children}</div>;
  }
}

NavbarMenu.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool
};

NavbarMenu.defaultProps = {
  isActive: false
};

export default NavbarMenu;
