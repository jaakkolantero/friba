import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import friba from "./friba";
import { trackReducer } from "./track";

const rootReducer = combineReducers({ friba, trackReducer });

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
