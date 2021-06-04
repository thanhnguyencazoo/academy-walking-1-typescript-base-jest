export const board = (): GameOfLifeBoard => {
  return [
    [true, true, true],
    [false, false, false],
    [false, false, false],
  ];
};

type Cell = boolean;
type CellCoordinates = { x: number; y: number };
export type GameOfLifeBoard = Cell[][];

export const nextGen = (board: GameOfLifeBoard) => {
  return [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
};

function countAliveNeighbours(board: Cell[][], x: number, y: number) {
  const neighbour1 = board[x - 1][y - 1];
  const neighbour2 = board[x - 1][y];
  const neighbour3 = board[x - 1][y + 1];
  const neighbour4 = board[x][y - 1];
  const neighbour5 = board[x][y + 1];
  const neighbour6 = board[x + 1][y - 1];
  const neighbour7 = board[x + 1][y];
  const neighbour8 = board[x + 1][y + 1];
  return [
    neighbour1,
    neighbour2,
    neighbour3,
    neighbour4,
    neighbour5,
    neighbour6,
    neighbour7,
    neighbour8,
  ].filter((value) => value).length;
}

export const checkCellItem = (
  { x, y }: CellCoordinates,
  board: GameOfLifeBoard
) => {
  const cell = board[x][y]
  const aliveNeighbours = countAliveNeighbours(board, x, y);

  if (cell) {
    if (aliveNeighbours > 3) return false;
    return aliveNeighbours >= 2;
  }

  if (!cell) {
    return aliveNeighbours === 3;
  }
};
