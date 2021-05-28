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

  it("player can not go to where another player has gone", () => {
    const game = new Game();
    const error = "location already taken";
    game.play(0, 0);
    game.play(0, 1);
    game.play(0, 2);
    expect(() => game.play(0, 2)).toThrow(new Error(error));
  });

  // it.skip("player wins when getting 3 in a row horizontally", () => {
  //   const game = new Game();
  //   game.play(0, 0);
  //   game.play(2, 2);
  //   game.play(0, 1);
  //   game.play(2, 1);
  //   game.play(0, 2);
  //
  //   expect(game.checkWinner()).toEqual('X');
  // });
});
