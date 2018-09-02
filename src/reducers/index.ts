import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import friba from "./friba";
import { playersReducer } from "./players";
import { roundReducer } from "./round";
import { trackReducer } from "./track";

const rootReducer = combineReducers({
  friba,
  playersReducer,
  roundReducer,
  trackReducer
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
