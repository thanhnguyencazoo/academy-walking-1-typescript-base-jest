import {
  board,
  checkCellItem,
  GameOfLifeBoard,
  nextGen,
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
    it("return false if it is on the edge", () => {
      const board: GameOfLifeBoard = [
        [true, false, false],
        [true, true, false],
        [false, true, false],
      ];

      expect(checkCellItem({ x: 0, y: 0 }, board)).toBe(false);
    });
    it("return true if has at least 2 neighbors", () => {
      const board: GameOfLifeBoard = [
        [false, false, false],
        [true, true, false],
        [false, true, false],
      ];

      expect(checkCellItem({ x: 1, y: 1 }, board)).toBe(true);
    });

    describe("when a cell is alive", () => {
      it("should return false if it has 1 neighbour", () => {
        const board = [
          [false, false, false],
          [true, true, false],
          [false, false, false],
        ];
        expect(checkCellItem({ x: 1, y: 1 }, board)).toBe(false);
      });

      it("should return false if it has no neighbours", () => {
        const board = [
          [false, false, false],
          [false, true, false],
          [false, false, false],
        ];
        expect(checkCellItem({ x: 1, y: 1 }, board)).toBe(false);
      });

      it("should return false if it has more than 3 neighbours", () => {
        const board = [
          [false, true, false],
          [true, true, true],
          [false, true, false],
        ];
        expect(checkCellItem({ x: 1, y: 1 }, board)).toBe(false);
      });

      it("should return true if it has 3 neighbours", () => {
        const board = [
          [false, true, false],
          [true, true, false],
          [false, true, false],
        ];
        expect(checkCellItem({ x: 1, y: 1 }, board)).toBe(true);
      });

      it("should return true if it has 2 neighbours", () => {
        const board = [
          [false, false, false],
          [true, true, false],
          [false, true, false],
        ];
        expect(checkCellItem({ x: 1, y: 1 }, board)).toBe(true);
      });
    });

    describe("when the cell is dead", () => {
      it("should become true if it has 3 neighbours", () => {
        const board = [
          [false, true, false],
          [true, false, false],
          [false, true, false],
        ];
        expect(checkCellItem({ x: 1, y: 1 }, board)).toBe(true);
      });

      it("should stay false if it has 2 neighbours", () => {
        const board = [
          [false, false, false],
          [true, false, false],
          [false, true, false],
        ];
        expect(checkCellItem({ x: 1, y: 1 }, board)).toBe(false);
      });
    });
  });

  describe("nextGen", () => {
    // it('should apply the checkSellItem function to every cell and return the result', () => {
    //   const gridBoard: GameOfLifeBoard = [
    //     [false, false, false],
    //     [true, true, true],
    //     [false, false, false],
    //   ];
    //   expect(nextGen(gridBoard)).toEqual([
    //     [false, true, false],
    //     [false, true, false],
    //     [false, true, false],
    //   ])
    // });
  });
});
