import { createAction } from "typesafe-actions";

const TRACK_UPDATE_NAME = "TRACK_UPDATE_NAME";
const HOLE_ADD = "HOLE_ADD";
const HOLE_REMOVE = "HOLE_REMOVE";
const PAR_INCREMENT = "PAR_INCREMENT";
const PAR_DECREMENT = "PAR_DECREMENT";

export const updateTrackName = createAction(TRACK_UPDATE_NAME, resolve => {
  return (name: string) => resolve(name);
});

export const addHole = createAction(HOLE_ADD);

export const removeHole = createAction(HOLE_REMOVE);

export const incrementPar = createAction(PAR_INCREMENT, resolve => {
  return (id: string) => resolve(id);
});

export const decrementPar = createAction(PAR_DECREMENT, resolve => {
  return (id: string) => resolve(id);
});
