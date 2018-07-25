import React from "react";
import PropTypes from "prop-types";

const Submit = ({ submit, cancel, onSubmit, onCancel, align }) => {
  var alignText = "field is-grouped ";
  switch (align) {
    case "left":
      break;
    case "center":
      alignText = alignText + "is-grouped-centered";
      break;
    case "right":
      alignText = alignText + "is-grouped-right";
      break;
    default:
      alignText = alignText + "is-grouped-right";
  }
  return (
    <div className={alignText}>
      {submit && (
        <p className="control">
          <a className="button is-primary" onClick={onSubmit}>
            {submit}
          </a>
        </p>
      )}
      {cancel && (
        <p className="control">
          <a className="button is-light" onClick={onCancel}>
            {cancel}
          </a>
        </p>
      )}
    </div>
  );
};

Submit.defaultProps = {
  align: "right"
};

Submit.propTypes = {
  submit: PropTypes.string,
  cancel: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

export default Submit;
