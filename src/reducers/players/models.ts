export interface Player {
  readonly name: string;
  readonly id: string;
  readonly selected: boolean;
  readonly scores: string[];
  readonly toPar: string;
  readonly position: string;
}

export interface Players extends Array<Player> {}
