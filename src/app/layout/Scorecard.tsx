import * as React from "react";

import { connect } from "react-redux";

import { default as Scoretable } from "../../components/friba/Scorecard";

export interface ScorecardProps {
  track: object;
  players: [];
}

const levelStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "nowrap",
  marginBottom: 32,
  overflowX: "auto"
};

const levelItemStyle: any = {
  flexDown: "auto",
  flexRight: 0,
  flexUp: 0,
  margin: 8
};

class Scorecard extends React.PureComponent<ScorecardProps, {}> {
  public render() {
    const { track, players } = this.props;
    return (
      <div className="section has-text-centered">
        <nav className="level is-mobile" style={levelStyle}>
          <div className="level-item has-text-centered" style={levelItemStyle}>
            <Scoretable
              track={track}
              players={players.filter(
                (player: any) => player.selected === true
              )}
            />
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  players: state.friba.players,
  track: state.friba.track
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scorecard);
