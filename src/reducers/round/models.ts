import { Players } from "../players/models";

export interface Round {
  readonly started: boolean;
  readonly finished: boolean;
  readonly currentHole: number;
  readonly skippedHole: boolean;
  readonly nameError: boolean;
  readonly playerError: boolean;
  readonly players: Players;
}
