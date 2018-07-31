import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import times from "lodash/times";

class Scorecard extends PureComponent {
  toNumber(number) {
    var parsed = parseInt(number, 10);
    if (isNaN(parsed)) {
      return 0;
    }
    return parsed;
  }

  renderHoleNumbers(numberOfHoles) {
    return times(numberOfHoles, i => (
      <th key={"holeCaption".concat(i)}>
        <abbr title={"hole ".concat(i + 1)}>{i + 1}</abbr>
      </th>
    ));
  }

  renderScores(player) {
    return player.scores.map((score, i) => (
      <td key={"score".concat(player.id).concat(i)}>{score}</td>
    ));
  }

  render() {
    const { players, track } = this.props;
    const { toNumber, renderHoleNumbers, renderScores } = this;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>
              <abbr title="Position">Pos</abbr>
            </th>
            <th>Player</th>
            {renderHoleNumbers(track.holes.length)}
            <th>
              <abbr title="to par">+/-</abbr>
            </th>
            <th>
              <abbr title="Number of throws">Sum</abbr>
            </th>
          </tr>
          <tr>
            <th className="is-light" />
            <th className="is-light">Par</th>
            {track.holes.map((hole, i) => (
              <th className="is-light" key={"holePar".concat(i)}>
                {hole.par}
              </th>
            ))}
            <th className="is-light" />
            <th className="is-light" />
          </tr>
        </thead>
        <tbody>
          {players.map((player, i) => (
            <tr key={player.id}>
              <th>{player.position}</th>
              <th>{player.name}</th>
              {renderScores(player)}
              <td>{player.toPar}</td>
              <td>
                {player.scores.reduce((a, b) => toNumber(a) + toNumber(b), 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Scorecard.propTypes = {
  players: PropTypes.array,
  track: PropTypes.object
};

Scorecard.defaultProps = {
  track: { name: "", holes: [{ par: "3" }] },
  players: [
    {
      name: "player",
      id: "1",
      selected: true,
      throws: ["3", "3", "3", "-", "-", "-", "-", "-", "-"],
      toPar: "-1",
      position: "1"
    }
  ]
};

export default Scorecard;
