export interface Hole {
  readonly id: string;
  readonly par: number;
}

export interface Track {
  readonly name: string | undefined;
  readonly holes: ReadonlyArray<Hole>;
  readonly sum: string | undefined;
}
