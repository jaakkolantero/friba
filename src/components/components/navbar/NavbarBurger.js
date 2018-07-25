import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NavbarBurger extends PureComponent {
  render() {
    const { isActive } = this.props;
    var className = isActive ? "navbar-burger is-active" : "navbar-burger";
    return (
      <a role="button" className={className}>
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    );
  }
}

NavbarBurger.PropTypes = {
  isActive: PropTypes.bool
};

NavbarBurger.defaultProps = {
  isActive: false
};

export default NavbarBurger;
