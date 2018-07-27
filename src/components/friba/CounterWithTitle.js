import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class CounterWithTitle extends PureComponent {
  render() {
    const { onDecrement, onIncrement, count, title } = this.props;
    return (
      <React.Fragment>
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <a
              className="button is-static has-text-grey-darker"
              onClick={onDecrement}
            >
              {title}
            </a>
          </p>
          <p className="control">
            <a className="button" onClick={onDecrement}>
              -
            </a>
          </p>
          <p className="control">
            <a
              className="button is-static has-text-grey-darker"
              style={{ width: 32 }}
            >
              {count}
            </a>
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

CounterWithTitle.PropTypes = {
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
  count: PropTypes.string,
  title: PropTypes.string
};

CounterWithTitle.defaultProps = {
  count: "-",
  title: "Anonymous"
};

export default CounterWithTitle;
