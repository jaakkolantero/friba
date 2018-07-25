import React from "react";
import PropTypes from "prop-types";

const Column = ({ children, className }) => {
  var localClassName = "column ";
  if (className) {
    localClassName = localClassName + className;
  }
  /*
  Example column className sets:
    is-4-tablet is-2-desktop is-1-widescreen
    is-6-tablet is-4-desktop is-2-widescreen
    is-8-tablet is-6-desktop is-4-widescreen
    is-10-tablet is-8-desktop is-6-widescreen
    is-12-tablet is-10-desktop is-8-widescreen
  */
  return <div className={localClassName}>{children}</div>;
};

Column.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number
};

export default Column;
