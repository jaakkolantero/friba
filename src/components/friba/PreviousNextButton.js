import React, { PureComponent } from "react";

class PreviousNextButton extends PureComponent {
  render() {
    const {
      currentHole,
      holeCount,
      onPreviousClick,
      onNextClick,
      onFinishClick
    } = this.props;
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
        {enableNext ? (
          <a
            className={nextClassName}
            style={{ margin: 8 }}
            onClick={enableNext ? onNextClick : undefined}
          >
            Next
          </a>
        ) : (
          undefined
        )}
        {!enableNext ? (
          <a
            className="button is-primary"
            style={{ margin: 8 }}
            onClick={!enableNext ? onFinishClick : undefined}
          >
            Finish
          </a>
        ) : (
          undefined
        )}
      </React.Fragment>
    );
  }
}

export default PreviousNextButton;
