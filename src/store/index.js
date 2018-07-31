import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import fribaSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(fribaSaga);
