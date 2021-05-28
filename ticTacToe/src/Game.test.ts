import { Game } from "./Game";

describe('Game', () => {
  it('player X should go first', () => {
    const game = new Game()
    game.play(0,0)
    expect(game.board).toEqual([
      ['X', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])
  });
});