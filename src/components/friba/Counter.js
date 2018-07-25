import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Counter extends PureComponent {
  render() {
    const { onDecrement, onIncrement, count } = this.props;
    return (
      <React.Fragment>
        <div className="field has-addons">
          <p className="control">
            <a className="button" onClick={onDecrement}>
              -
            </a>
          </p>
          <p className="control">
            <a className="button is-light is-static">{count}</a>
          </p>
          <p className="control">
            <a className="button" onClick={onIncrement}>
              +
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

Counter.PropTypes = {
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  count: PropTypes.string
};

Counter.defaultProps = {
  count: "-"
};

export default Counter;
