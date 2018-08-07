import React, { PureComponent } from "react";

import times from "lodash/times";
import { Redirect } from "react-router";

import { connect } from "react-redux";
import {
  updateTrackName,
  addHole,
  removeHole,
  incrementPar,
  decrementPar,
  togglePlayer,
  startRound
} from "reducers/friba/actions";

import CounterWithTitle from "components/friba/CounterWithTitle";
import InputWithTitle from "components/form/InputWithTitle";
import SelectPlayers from "components/friba/SelectPlayers";

class NewGame extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      onUpdateTrackName,
      holeCount,
      track,
      players,
      started,
      showNameError,
      showPlayerError,
      onAddHole,
      onRemoveHole,
      onDecrementPar,
      onIncrementPar,
      onTogglePlayer,
      onStartRound
    } = this.props;
    return (
      <React.Fragment>
        {started && <Redirect to="/hole/1" />}
        <div className="section has-text-centered">
          <h1 className="is-size-1">Create New game</h1>
          <InputWithTitle
            title="Name:"
            placeholder="Track name"
            onChange={event => onUpdateTrackName(event.target.value)}
            error={showNameError && "Name missing"}
          />
          <hr />
          <CounterWithTitle
            count={holeCount.toString()}
            title="# of holes"
            onIncrement={onAddHole}
            onDecrement={onRemoveHole}
          />
          <hr />
          {track.holes.map((hole, i) => (
            <CounterWithTitle
              key={hole.id}
              count={hole.par}
              title={"hole ".concat(i + 1)}
              onIncrement={() => onIncrementPar(hole.id)}
              onDecrement={() => onDecrementPar(hole.id)}
            />
          ))}
          <hr />
          <SelectPlayers
            players={players}
            onToggle={id => onTogglePlayer(id)}
            showError={showPlayerError}
          />
          <hr />
          <a className="button is-primary" onClick={onStartRound}>
            Start new game
          </a>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  holeCount: state.friba.track.holes.length,
  track: state.friba.track,
  players: state.friba.players,
  started: state.friba.started,
  showPlayerError: state.friba.showPlayerError,
  showNameError: state.friba.showNameError
});

const mapDispatchToProps = dispatch => ({
  onUpdateTrackName(text) {
    dispatch(updateTrackName(text));
  },
  onAddHole() {
    dispatch(addHole());
  },
  onRemoveHole() {
    dispatch(removeHole());
  },
  onIncrementPar(id) {
    dispatch(incrementPar(id));
  },
  onDecrementPar(id) {
    dispatch(decrementPar(id));
  },
  onTogglePlayer(id) {
    dispatch(togglePlayer(id));
  },
  onStartRound() {
    dispatch(startRound());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
