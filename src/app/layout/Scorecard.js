import React, { PureComponent } from "react";

import { connect } from "react-redux";

import { default as Scoretable } from "components/friba/Scorecard";

class Scorecard extends PureComponent {
  render() {
    const { track, players } = this.props;
    return (
      <div className="section has-text-centered">
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
            style={{ flexUp: 0, flexRight: 0, flexDown: "auto", margin: 8 }}
          >
            <Scoretable
              track={track}
              players={players.filter(player => player.selected === true)}
            />
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  track: state.friba.track,
  players: state.friba.players
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Scorecard);
