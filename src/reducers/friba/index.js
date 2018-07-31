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
  HOLE_REMOVE
} from "./actions";

const initialState = {
  started: false,
  finished: false,
  onHole: "",
  skippedHole: false,
  skippedHoleErrorMessage: false,
  track: {
    name: "",
    holes: [{ id: v4(), par: 3 }]
  },
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
                ? { ...hole, par: Number(hole.par) + 1 }
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
      return;
    default:
      return state;
  }
}

export default friba;
