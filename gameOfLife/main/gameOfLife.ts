export const board = (): GameOfLifeBoard => {
  return [
    [true, true, true],
    [false, false, false],
    [false, false, false],
  ]
};

export type GameOfLifeBoard = boolean[][]

export function nextGen(board: GameOfLifeBoard) {
  return board
}