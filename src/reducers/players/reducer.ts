import { ActionType, getType } from "typesafe-actions";
import { v4 } from "uuid";

import { Player, Players } from "./models";

import * as playersActions from "./actions";
export type PlayersAction = ActionType<typeof playersActions>;

export const initialState: Players = [
  {
    name: "DiscgolfPlayer",
    // tslint:disable-next-line:object-literal-sort-keys
    id: v4(),
    selected: true,
    scores: [],
    toPar: "0",
    position: "-"
  }
];

const playersReducer = (
  state: Players = initialState,
  action: PlayersAction
) => {
  switch (action.type) {
    case getType(playersActions.togglePlayer):
      return state.map(
        (player: Player, i: number) =>
          player.id === action.payload
            ? { ...player, selected: !player.selected }
            : player
      );
    case getType(playersActions.incrementScore):
      return state.map(
        (player: Player, i: number) =>
          player.id === action.payload.id
            ? {
                ...player,
                scores: [
                  ...player.scores.slice(0, action.payload.currentHole - 1),
                  player.scores[action.payload.currentHole - 1] === "-"
                    ? action.payload.par.toString()
                    : Math.min(
                        Number(player.scores[action.payload.currentHole - 1]) +
                          1,
                        99
                      ).toString(),
                  ...player.scores.slice(action.payload.currentHole)
                ]
              }
            : player
      );
    case getType(playersActions.decrementScore):
      return state.map(
        (player, i) =>
          player.id === action.payload.id
            ? {
                ...player,
                scores: [
                  ...player.scores.slice(0, action.payload.currentHole - 1),
                  player.scores[action.payload.currentHole - 1] === "-"
                    ? (action.payload.par - 1).toString()
                    : Math.max(
                        Number(player.scores[action.payload.currentHole - 1]) -
                          1,
                        1
                      ).toString(),
                  ...player.scores.slice(action.payload.currentHole)
                ]
              }
            : player
      );
    case getType(playersActions.rankPlayers):
      return state.map((player: Player, i: number) => {
        if (player.selected === true) {
          const score = player.scores.reduce(
            (a, b) => Number(a) + Number(b),
            0
          );
          const sum = action.payload.holes.reduce((a, b) => a + b.par, 0);
          const toPar = isNaN(score) ? "-" : (score - sum).toString();
          return { ...player, toPar };
        }
        return player;
      });
    case getType(playersActions.addPlayer):
      return [
        ...state,
        {
          name: action.payload,
          // tslint:disable-next-line:object-literal-sort-keys
          id: v4(),
          selected: true,
          scores: [],
          toPar: "0",
          position: "-"
        }
      ];
    default:
      return state;
  }
};

export default playersReducer;
