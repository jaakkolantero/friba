import React, { PureComponent } from "react";

import { Redirect } from "react-router";

import { connect } from "react-redux";
import {
  setCurrentHole,
  incrementScore,
  decrementScore
} from "reducers/friba/actions";

import CourseSelector from "components/friba/CourseSelector";
import CounterWithTitle from "components/friba/CounterWithTitle";
import PreviousNextButton from "components/friba/PreviousNextButton";

class Hole extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: undefined
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  componentDidMount() {
    var currentHole = this.props.match.params.id;
    this.props.onSetCurrentHole(currentHole);
  }

  handleNextClick() {
    var currentHole = this.props.match.params.id;
    this.setState(() => ({ redirectTo: Number(currentHole) + 1 }));
  }

  handlePreviousClick() {
    var currentHole = this.props.match.params.id;
    this.setState(() => ({ redirectTo: Number(currentHole) - 1 }));
  }

  handleSelectCourse(course) {
    this.setState(() => ({ redirectTo: Number(course) }));
  }

  handleIncrement(event) {
    const { currentHole, onIncrementScore } = this.props;
    const score = event.target.dataset.count;
    const id = event.target.dataset.id;
    onIncrementScore(id);
  }
  handleDecrement(event) {
    const { currentHole, onDecrementScore } = this.props;
    const score = event.target.dataset.count;
    const id = event.target.dataset.id;
    onDecrementScore(id);
  }

  render() {
    const { redirectTo } = this.state;
    const { currentHole, holeCount, players, onSetCurrentHole } = this.props;
    const selectedPlayers = players.filter(player => player.selected);
    return (
      <React.Fragment>
        {redirectTo && <Redirect to={"/hole/".concat(redirectTo)} />}
        <div className="section has-text-centered">
          <div className="field">
            <label className="label">
              Hole {currentHole}/{holeCount}
            </label>
          </div>
          {selectedPlayers.map((player, i) => (
            <CounterWithTitle
              key={player.id.concat(player.name)}
              count={player.scores[currentHole - 1]}
              title={player.name}
              id={player.id}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          ))}
        </div>
        <div className="section has-text-centered">
          <PreviousNextButton
            currentHole={currentHole}
            holeCount={holeCount}
            onPreviousClick={this.handlePreviousClick}
            onNextClick={this.handleNextClick}
          />
          <CourseSelector
            holes={holeCount}
            active={currentHole}
            onSelect={course => this.handleSelectCourse(course)}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  holeCount: state.friba.track.holes.length,
  holes: state.friba.track.holes,
  players: state.friba.players,
  currentHole: state.friba.currentHole
});

const mapDispatchToProps = dispatch => ({
  onSetCurrentHole(payload) {
    dispatch(setCurrentHole(payload));
  },
  onIncrementScore(payload) {
    dispatch(incrementScore(payload));
  },
  onDecrementScore(payload) {
    dispatch(decrementScore(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Hole);
