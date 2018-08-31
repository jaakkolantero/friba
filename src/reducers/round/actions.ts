import { createAction } from "typesafe-actions";

const ROUND_START = "ROUND_START";
const ROUND_FINISH = "ROUND_FINISH";
const CURRENT_HOLE_SET = "CURRENT_HOLE_SET";

export const startRound = createAction(ROUND_START, resolve => {
  return () => resolve();
});

export const finishRound = createAction(ROUND_FINISH, resolve => {
  return () => resolve();
});

export const setCurrentHole = createAction(CURRENT_HOLE_SET, resolve => {
  return (hole: number) => resolve(hole);
});
