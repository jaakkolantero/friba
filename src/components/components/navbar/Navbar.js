import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Navbar extends PureComponent {
  render() {
    const { children, modifier } = this.props;
    var className = "navbar ";
    modifier && (className = className.concat(modifier));
    return <nav className={className}>{children}</nav>;
  }
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Navbar;
