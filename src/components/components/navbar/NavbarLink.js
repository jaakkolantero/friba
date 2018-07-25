import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NavbarLink extends PureComponent {
  render() {
    const { children, to } = this.props;
    return (
      <a class="navbar-link" href={to}>
        {children}
      </a>
    );
  }
}

NavbarLink.propTypes = {};

export default NavbarLink;
