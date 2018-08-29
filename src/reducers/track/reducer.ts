import { ActionType, getType } from "typesafe-actions";
import { v4 } from "uuid";

import * as trackActions from "./actions";
import { Hole, Track } from "./models";
import { sumHoles } from "./selectors";

export type TrackAction = ActionType<typeof trackActions>;

const initialHoles: Hole[] = [
  { id: v4(), par: 3 },
  { id: v4(), par: 3 },
  { id: v4(), par: 3 },
  { id: v4(), par: 3 },
  { id: v4(), par: 3 },
  { id: v4(), par: 3 },
  { id: v4(), par: 3 },
  { id: v4(), par: 3 },
  { id: v4(), par: 3 }
];

export const initialState: Track = {
  holes: [...initialHoles],
  name: undefined,
  sum: sumHoles(initialHoles)
};

const trackReducer = (state: Track = initialState, action: TrackAction) => {
  switch (action.type) {
    case getType(trackActions.updateTrackName):
      return { ...state, name: action.payload };
    case getType(trackActions.removeHole):
      return {
        ...state,
        holes: state.holes.length > 1 ? state.holes.slice(0, -1) : state.holes
      };
    case getType(trackActions.incrementPar):
      return {
        ...state,
        holes: state.holes.map(
          (hole, i) =>
            hole.id === action.payload
              ? { ...hole, par: Math.min(hole.par + 1, 99) }
              : hole
        )
      };
    case getType(trackActions.decrementPar):
      return {
        ...state,
        holes: state.holes.map(
          (hole, i) =>
            hole.id === action.payload
              ? { ...hole, par: Math.max(hole.par - 1, 1) }
              : hole
        )
      };
    default:
      return state;
  }
};

export default trackReducer;
