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

  describe("check cell item", () => {
    it("return true if has at least 2 neighbors", () => {
      const board: GameOfLifeBoard = [
        [false, false, false],
        [true, true, false],
        [false, true, false],
      ];

      expect(checkCellItem({x: 1, y:1}, board)).toBe(true);
    });

    describe('when a cell is alive', () => {
      it("should return false if it has 1 neighbour", () => {
        const board = [
          [false, false, false],
          [true, true, false],
          [false, false, false],
        ];
        expect(checkCellItem({x: 1, y:1}, board)).toBe(false);
      });

      it("should return false if it has no neighbours", () => {
        const board = [
          [false, false, false],
          [false, true, false],
          [false, false, false],
        ];
        expect(checkCellItem({x: 1, y:1}, board)).toBe(false);
      });

      it("should return false if it has more than 3 neighbours", () => {
        const board = [
          [false, true, false],
          [true, true, true],
          [false, true, false],
        ];
        expect(checkCellItem({x: 1, y:1}, board)).toBe(false);
      });
    });
  });
});
