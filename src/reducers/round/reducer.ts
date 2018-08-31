import { ActionType, getType } from "typesafe-actions";
import { v4 } from "uuid";

import { store } from "../../store";
import { Player } from "../players/models";

import { Round } from "./models";

import * as roundActions from "./actions";
export type RoundAction = ActionType<typeof roundActions>;

export const initialState: Round = {
  started: false,
  // tslint:disable-next-line:object-literal-sort-keys
  finished: false,
  currentHole: 1,
  nameError: false,
  playerError: false,
  players: [
    {
      id: v4(),
      name: "DiscgolfPlayer",
      selected: true,
      // tslint:disable-next-line:object-literal-sort-keys
      scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
      toPar: "0",
      position: "-"
    }
  ],
  skippedHole: false
};

const roundReducer = (state: Round = initialState, action: RoundAction) => {
  switch (action.type) {
    case getType(roundActions.startRound):
      let playerError = false;
      let nameError = false;
      let started = true;
      // TODO: make statetree type of RootReducer for typechecking
      const stateTree = store.getState();

      const emptyTrack = new Array(stateTree.track.holes.length).fill("-");

      if (
        stateTree.players.filter((player: Player) => player.selected === true)
          .length <= 0
      ) {
        playerError = true;
      }

      if (stateTree.track.name.length <= 0) {
        nameError = true;
      }

      if (nameError || playerError) {
        started = false;
      }

      return {
        ...state,
        nameError,
        playerError,
        started,
        // tslint:disable-next-line:object-literal-sort-keys
        players: stateTree.players.map(
          (player: Player, i: number) =>
            player.selected === true
              ? { ...player, scores: emptyTrack }
              : player
        )
      };
    case getType(roundActions.finishRound):
      return {
        ...state,
        finished: true
      };
    case getType(roundActions.setCurrentHole):
      return { ...state };
    default:
      return state;
  }
};

export default roundReducer;
