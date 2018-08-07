/**
 *  friba reducer
 */
import { v4 } from "uuid";

// Import Action Types
import {
  TRACK_UPDATE_NAME,
  PAR_INCREMENT,
  PAR_DECREMENT,
  HOLE_ADD,
  HOLE_REMOVE,
  PLAYER_TOGGLE,
  ROUND_START,
  CURRENT_HOLE_SET,
  SCORE_INCREMENT,
  SCORE_DECREMENT
} from "./actions";

const initialState = {
  started: false,
  finished: false,
  currentHole: "",
  skippedHole: false,
  skippedHoleErrorMessage: false,
  track: {
    name: "",
    holes: [
      { id: v4(), par: 3 },
      { id: v4(), par: 3 },
      { id: v4(), par: 3 },
      { id: v4(), par: 3 },
      { id: v4(), par: 3 },
      { id: v4(), par: 3 },
      { id: v4(), par: 3 },
      { id: v4(), par: 3 },
      { id: v4(), par: 3 }
    ]
  },
  showNameError: false,
  showPlayerError: false,
  players: [
    {
      name: "player1",
      id: v4(),
      selected: true,
      scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
      toPar: "0",
      position: "1"
    },
    {
      name: "player2",
      id: v4(),
      selected: true,
      scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
      toPar: "0",
      position: "1"
    },
    {
      name: "player3",
      id: v4(),
      selected: false,
      scores: [],
      toPar: "0",
      position: "1"
    },
    {
      name: "player4",
      id: v4(),
      selected: false,
      scores: [],
      toPar: "0",
      position: "1"
    }
  ]
};

function friba(state = initialState, action) {
  switch (action.type) {
    case TRACK_UPDATE_NAME:
      return { ...state, track: { ...state.track, name: action.payload } };
    case HOLE_ADD:
      return {
        ...state,
        track: {
          ...state.track,
          holes: [...state.track.holes, { id: v4(), par: 3 }]
        }
      };
    case HOLE_REMOVE:
      return {
        ...state,
        track: {
          ...state.track,
          holes:
            state.track.holes.length > 1
              ? state.track.holes.slice(0, -1)
              : state.track.holes
        }
      };
    case PAR_INCREMENT:
      return {
        ...state,
        track: {
          ...state.track,
          holes: state.track.holes.map(
            (hole, i) =>
              hole.id === action.payload
                ? { ...hole, par: Math.min(Number(hole.par) + 1, 99) }
                : hole
          )
        }
      };
    case PAR_DECREMENT:
      return {
        ...state,
        track: {
          ...state.track,
          holes: state.track.holes.map(
            (hole, i) =>
              hole.id === action.payload
                ? { ...hole, par: Math.max(Number(hole.par) - 1, 1) }
                : hole
          )
        }
      };
    case PLAYER_TOGGLE:
      return {
        ...state,
        players: state.players.map(
          (player, i) =>
            player.id === action.payload
              ? { ...player, selected: !player.selected }
              : player
        )
      };
    case ROUND_START:
      var playerError = false;
      var nameError = false;
      var startRound = true;

      const newTrack = new Array(state.track.holes.length).fill("-");

      if (
        state.players.filter(player => player.selected === true).length <= 0
      ) {
        playerError = true;
      }

      if (!state.track.name.length > 0) {
        nameError = true;
      }

      if (nameError || playerError) {
        startRound = false;
      }

      return {
        ...state,
        showPlayerError: playerError,
        showNameError: nameError,
        started: startRound,
        players: state.players.map(
          (player, i) =>
            player.selected === true ? { ...player, scores: newTrack } : player
        )
      };
    case CURRENT_HOLE_SET:
      return { ...state, currentHole: action.payload };
    case SCORE_INCREMENT:
      return {
        ...state,
        players: state.players.map(
          (player, i) =>
            player.id === action.payload
              ? {
                  ...player,
                  scores: [
                    ...player.scores.slice(0, state.currentHole - 1),
                    player.scores[state.currentHole - 1] === "-"
                      ? state.track.holes[state.currentHole - 1].par.toString()
                      : Math.min(
                          Number(player.scores[state.currentHole - 1]) + 1,
                          99
                        ).toString(),
                    ...player.scores.slice(state.currentHole)
                  ]
                }
              : player
        )
      };
    case SCORE_DECREMENT:
      return {
        ...state,
        players: state.players.map(
          (player, i) =>
            player.id === action.payload
              ? {
                  ...player,
                  scores: [
                    ...player.scores.slice(0, state.currentHole - 1),
                    player.scores[state.currentHole - 1] === "-"
                      ? (
                          state.track.holes[state.currentHole - 1].par - 1
                        ).toString()
                      : Math.max(
                          Number(player.scores[state.currentHole - 1]) - 1,
                          1
                        ).toString(),
                    ...player.scores.slice(state.currentHole)
                  ]
                }
              : player
        )
      };
    default:
      return state;
  }
}

export default friba;
