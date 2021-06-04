import { board } from "../main/gameOfLife";

describe("game of life", () => {
  it("create the board", () => {
    const gridBoard = [
      [true, true, true],
      [false, false, false],
      [false, false, false],
    ];
    expect(board()).toBe(gridBoard);
  });
});
