import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NavbarItem extends PureComponent {
  render() {
    const { children, modifier, to, hasDropdown, isActive } = this.props;
    var className = "navbar-item ";
    className = className.concat(modifier);
    if (isActive) {
      className = className.concat(" is-active ");
    }

    if (hasDropdown) {
      className = className.concat(" has-dropdown");

      return (
        <div className={className} href={to}>
          {children}
        </div>
      );
    }

    return (
      <a className={className} href={to}>
        {children}
      </a>
    );
  }
}

NavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  modifier: PropTypes.string,
  to: PropTypes.string,
  hasDropdown: PropTypes.bool
};

NavbarItem.defaultProps = {
  modifier: "",
  hasDropdown: false
};

export default NavbarItem;
