import React from "react";
import PropTypes from "prop-types";

const TextAreaWithTitle = ({
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
            <textarea
              className="textarea"
              type="text"
              placeholder={placeholder}
              onChange={onChange}
              onClick={onClick}
            />
          </p>
          {success && <p class="help is-success">{success}</p>}
          {error && <p class="help is-danger">{error}</p>}
        </div>
      </div>
    </div>
  </React.Fragment>
);

TextAreaWithTitle.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  success: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};
export default TextAreaWithTitle;
