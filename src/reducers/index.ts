import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import friba from "./friba";
import { roundReducer } from "./round";
import { trackReducer } from "./track";

const rootReducer = combineReducers({ friba, trackReducer, roundReducer });

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
