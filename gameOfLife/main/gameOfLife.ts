export const board = (): GameOfLifeBoard => {
  return [
    [true, true, true],
    [false, false, false],
    [false, false, false],
  ];
};

export type GameOfLifeBoard = boolean[][];

export const nextGen = (board: GameOfLifeBoard) => {
  return [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
};

export const checkCellItem = (cell: boolean) => {
  console.log("blabla", cell);
};
