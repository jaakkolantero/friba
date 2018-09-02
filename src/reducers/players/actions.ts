import { createAction } from "typesafe-actions";
import { Hole } from "../track/models";

const PLAYER_TOGGLE = "PLAYER_TOGGLE";
const SCORE_INCREMENT = "SCORE_INCREMENT";
const SCORE_DECREMENT = "SCORE_DECREMENT";
const PLAYERS_RANK = "PLAYERS_RANK";
const PLAYER_ADD = "PLAYER_ADD";

export const togglePlayer = createAction(PLAYER_TOGGLE, resolve => {
  return (id: string) => resolve(id);
});

export const incrementScore = createAction(SCORE_INCREMENT, resolve => {
  return (id: string, currentHole: number, par: number) =>
    resolve({ id, currentHole, par });
});

export const decrementScore = createAction(SCORE_DECREMENT, resolve => {
  return (id: string, currentHole: number, par: number) =>
    resolve({ id, currentHole, par });
});

export const rankPlayers = createAction(PLAYERS_RANK, resolve => {
  return (holes: Hole[]) => resolve({ holes });
});

export const addPlayer = createAction(PLAYER_ADD, resolve => {
  return (name: string) => resolve(name);
});
