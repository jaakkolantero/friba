import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NavbarEnd extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="navbar-end">{children}</div>;
  }
}

NavbarEnd.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavbarEnd;
