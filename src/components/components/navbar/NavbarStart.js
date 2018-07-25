import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NavbarStart extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="navbar-start">{children}</div>;
  }
}

NavbarStart.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavbarStart;
