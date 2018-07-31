import React, { PureComponent } from "react";

import times from "lodash/times";

import { connect } from "react-redux";
import {
  updateTrackName,
  addHole,
  removeHole,
  incrementPar,
  decrementPar
} from "reducers/friba/actions";

import CounterWithTitle from "components/friba/CounterWithTitle";
import InputWithTitle from "components/form/InputWithTitle";
import SelectPlayers from "components/friba/SelectPlayers";

class Content extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      onUpdateTrackName,
      holeCount,
      track,
      players,
      onAddHole,
      onRemoveHole,
      onDecrementPar,
      onIncrementPar
    } = this.props;
    return (
      <div className="section has-text-centered">
        <h1 className="is-size-1">Create New game</h1>
        <InputWithTitle
          title="Name:"
          placeholder="Track name"
          onChange={event => onUpdateTrackName(event.target.value)}
        />
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
          onToggle={() => console.log("toggle")}
        />
        <hr />
        <a className="button is-primary">Start new game</a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  holeCount: state.friba.track.holes.length,
  track: state.friba.track,
  players: state.friba.players
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
