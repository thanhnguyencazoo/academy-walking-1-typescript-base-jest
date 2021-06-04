import {
  board,
  GameOfLifeBoard,
  nextGen,
  checkCellItem,
} from "../main/gameOfLife";

describe("game of life", () => {
  it("create the board", () => {
    const gridBoard: GameOfLifeBoard = [
      [true, true, true],
      [false, false, false],
      [false, false, false],
    ];
    expect(board()).toEqual(gridBoard);
  });

  describe("cell", () => {
    it("should die if it has no neighbour", () => {
      const board = [
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ];
      const newBoard = nextGen(board);
      expect(newBoard).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]);
    });

    it("should die if it has 1 neighbour", () => {
      const board = [
        [false, false, false],
        [true, true, false],
        [false, false, false],
      ];
      const newBoard = nextGen(board);
      expect(newBoard).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ]);
    });
  });

  describe("check cell item", () => {
    it("return true if has at least 2 neighbors", () => {
      const board = [
        [false, false, false],
        [true, true, false],
        [false, true, false],
      ];

      expect(checkCellItem(board[1][1])).toBe(true);
    });
  });
});
