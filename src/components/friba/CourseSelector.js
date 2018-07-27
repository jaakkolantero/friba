import React, { PureComponent } from "react";
import times from "lodash/times";

class CourseSelector extends PureComponent {
  render() {
    const { holes, active, onSelect } = this.props;
    return (
      <nav
        className="level is-mobile"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          marginBottom: 32
        }}
      >
        <div
          className="level-item has-text-centered"
          style={{ flexUp: 0, flexRight: 0, flexDown: "auto" }}
        >
          <div>
            {times(holes, i => (
              <a
                className={active == i + 1 ? "button is-primary" : "button"}
                key={"holenumber".concat(i)}
                style={{ marginRight: 2, marginLeft: 2, marginBottom: 16 }}
                onClick={() => onSelect(i + 1)}
              >
                {i + 1}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default CourseSelector;
