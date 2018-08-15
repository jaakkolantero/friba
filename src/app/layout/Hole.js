import React, { PureComponent } from "react";

import { Redirect } from "react-router";

import { connect } from "react-redux";
import {
  setCurrentHole,
  incrementScore,
  decrementScore,
  rankPlayers
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
    this.handleFinishClick = this.handleFinishClick.bind(this);
  }
  componentDidMount() {
    var currentHole = this.props.match.params.id;
    this.props.onSetCurrentHole(currentHole);
  }

  handleNextClick() {
    var currentHole = this.props.match.params.id;
    this.setState(() => ({
      redirectTo: "/hole/".concat(Number(currentHole) + 1)
    }));
  }

  handlePreviousClick() {
    var currentHole = this.props.match.params.id;
    this.setState(() => ({
      redirectTo: "/hole/".concat(Number(currentHole) - 1)
    }));
  }

  handleFinishClick() {
    this.props.onRankPlayers();
    this.setState(() => ({
      redirectTo: "/scorecard"
    }));
  }

  handleSelectCourse(course) {
    this.setState(() => ({ redirectTo: Number(course) }));
  }

  handleIncrement(event) {
    const { onIncrementScore } = this.props;
    const id = event.target.dataset.id;
    onIncrementScore(id);
  }
  handleDecrement(event) {
    const { onDecrementScore } = this.props;
    const id = event.target.dataset.id;
    onDecrementScore(id);
  }

  render() {
    const { redirectTo } = this.state;
    const { currentHole, holeCount, players, onSetCurrentHole } = this.props;
    const selectedPlayers = players.filter(player => player.selected);
    return (
      <React.Fragment>
        {redirectTo && <Redirect to={redirectTo} />}
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
            onFinishClick={this.handleFinishClick}
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
  onRankPlayers(payload) {
    dispatch(rankPlayers(payload));
  },
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
