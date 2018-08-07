import React, { PureComponent } from "react";

class PreviousNextButton extends PureComponent {
  render() {
    const { currentHole, holeCount, onPreviousClick, onNextClick } = this.props;
    const enablePrevious = currentHole > 1;
    const enableNext = currentHole < holeCount;
    const previousClassName = enablePrevious
      ? "button is-primary"
      : "button is-static";
    const nextClassName = enableNext ? "button is-primary" : "button is-static";
    return (
      <React.Fragment>
        <a
          className={previousClassName}
          style={{ margin: 8 }}
          onClick={enablePrevious ? onPreviousClick : undefined}
        >
          Previous
        </a>
        <a
          className={nextClassName}
          style={{ margin: 8 }}
          onClick={enableNext ? onNextClick : undefined}
        >
          Next
        </a>
      </React.Fragment>
    );
  }
}

export default PreviousNextButton;
