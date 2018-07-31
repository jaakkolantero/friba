import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class SelectPlayers extends PureComponent {
  render() {
    const { players, onToggle } = this.props;
    return (
      <div className="tags">
        {players.map((player, id) => (
          <span
            className={player.selected ? "tag is-primary" : "tag"}
            key={player.id}
            data-id={player.id}
            onClick={() => onToggle(player.id)}
          >
            {player.name}
          </span>
        ))}
      </div>
    );
  }
}

SelectPlayers.propTypes = {
  players: PropTypes.array.isRequired,
  onToggle: PropTypes.func
};

export default SelectPlayers;
