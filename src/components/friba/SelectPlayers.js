import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SelectPlayers extends PureComponent {
  render() {
    const { players, onToggle, showError } = this.props;
    return (
      <React.Fragment>
        <div className="tags is-centered">
          {players.map((player, id) => (
            <span
              key={player.id.concat("-select-players")}
              className={
                player.selected ? "tag is-primary button" : "tag button"
              }
              data-id={player.id}
              onClick={() => onToggle(player.id)}
            >
              {player.name}
            </span>
          ))}
        </div>
        {showError && (
          <p className="help is-danger">Please select atleast 1 player</p>
        )}
      </React.Fragment>
    );
  }
}

SelectPlayers.propTypes = {
  players: PropTypes.array.isRequired,
  onToggle: PropTypes.func,
  showError: PropTypes.bool
};

SelectPlayers.defaultProps = {
  showError: false
};

export default SelectPlayers;
