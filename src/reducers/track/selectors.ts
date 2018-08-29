import { Hole } from "./models";

export const sumHoles = (holes: Hole[]): string =>
  holes.reduce((a: number, b: Hole) => a + b.par, 0).toString();
