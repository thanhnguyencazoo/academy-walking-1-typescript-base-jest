import { Game } from "./Game";

describe("Game", () => {
  it("player X should go first", () => {
    const game = new Game();
    game.play(0, 0);
    expect(game.board()).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("player O should go second", () => {
    const game = new Game();
    game.play(0, 0);
    game.play(0, 1);

    expect(game.board()).toEqual([
      ["X", "O", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("player X should go third", () => {
    const game = new Game();
    game.play(0, 0);
    game.play(0, 1);
    game.play(0, 2);

    expect(game.board()).toEqual([
      ["X", "O", "X"],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("play O can not go to where player X stay", () => {
    const game = new Game();
    const error = "can't go to X location";
    game.play(0, 0);
    game.play(0, 1);
    game.play(0, 2);
    expect(() => game.play(0, 2)).toThrow(new Error(error));
  });
});
