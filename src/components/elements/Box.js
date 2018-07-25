import React from "react";
import PropTypes from "prop-types";

const Box = ({ children }) => <div className="box">{children}</div>;

Box.propTypes = {
  children: PropTypes.node
};

export default Box;
