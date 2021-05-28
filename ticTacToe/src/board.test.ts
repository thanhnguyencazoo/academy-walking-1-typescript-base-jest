import { createBoard, createPlayerX } from "./board";

describe("board", () => {
  it("should create a new board", () => {
    const board = createBoard();
    expect(board).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("should create x player", () => {
    expect(createPlayerX()).toEqual("X");
  });
});
