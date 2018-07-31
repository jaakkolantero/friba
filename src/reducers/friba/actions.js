export const TRACK_UPDATE_NAME = "TRACK_UPDATE_NAME";
export const HOLE_ADD = "HOLE_ADD";
export const HOLE_REMOVE = "HOLE_REMOVE";
export const PAR_INCREMENT = "PAR_INCREMENT";
export const PAR_DECREMENT = "PAR_DECREMENT";

export function updateTrackName(payload) {
  return {
    type: TRACK_UPDATE_NAME,
    payload
  };
}

export function addHole(payload) {
  return {
    type: HOLE_ADD,
    payload
  };
}

export function removeHole(payload) {
  return {
    type: HOLE_REMOVE,
    payload
  };
}

export function incrementPar(payload) {
  return {
    type: PAR_INCREMENT,
    payload
  };
}

export function decrementPar(payload) {
  return {
    type: PAR_DECREMENT,
    payload
  };
}
