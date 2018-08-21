import React, { PureComponent } from "react";

class AddPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  render() {
    const { name } = this.state;
    const { onAddPlayer } = this.props;
    return (
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Add player"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="control">
          <a className="button is-info" onClick={() => onAddPlayer(name)}>
            Add
          </a>
        </div>
      </div>
    );
  }
}

export default AddPlayer;
