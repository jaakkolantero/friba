import React from "react";
import PropTypes from "prop-types";

const Columns = ({ children, className }) => {
  var localClassName = "columns ";
  if (className) {
    localClassName = localClassName + className;
  }
  return <div className={localClassName}>{children}</div>;
};

Columns.defaultProps = {
  center: false
};

Columns.propTypes = {
  children: PropTypes.node,
  center: PropTypes.bool
};

export default Columns;
