import React from "react";
import PropTypes from "prop-types";

const InputWithTitle = ({
  title,
  placeholder,
  error,
  success,
  onChange,
  onClick
}) => (
  <React.Fragment>
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{title}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder={placeholder}
              onChange={onChange}
              onClick={onClick}
            />
          </p>
          {error && <p className="help is-danger">{error}</p>}
          {success && <p className="help is-success">{success}</p>}
        </div>
      </div>
    </div>
  </React.Fragment>
);

InputWithTitle.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  success: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};
export default InputWithTitle;
