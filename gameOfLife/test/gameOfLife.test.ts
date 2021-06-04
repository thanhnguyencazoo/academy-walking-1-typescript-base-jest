import { board, GameOfLifeBoard, nextGen } from "../main/gameOfLife";

describe("game of life", () => {
  it("create the board", () => {
    const gridBoard: GameOfLifeBoard = [
      [true, true, true],
      [false, false, false],
      [false, false, false],
    ];
    expect(board()).toEqual(gridBoard);
  });

  describe('cell', () => {
    it('should die if it has no neighbours', () => {
      const board = [
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ];
      const newBoard = nextGen(board)
      expect(newBoard).toEqual([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ])
    });
  });
});
