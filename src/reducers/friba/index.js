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
  ROUND_START
} from "./actions";

const initialState = {
  started: false,
  finished: false,
  onHole: "",
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
      selected: false,
      scores: [],
      toPar: "0",
      position: "1"
    },
    {
      name: "player2",
      id: v4(),
      selected: false,
      scores: [],
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
      if (
        !state.players.filter(player => player.selected === true).length > 0
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
        started: startRound
      };
      return;
    default:
      return state;
  }
}

export default friba;
