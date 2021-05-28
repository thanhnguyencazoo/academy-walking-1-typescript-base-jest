import { Board } from "./Board";

export enum Players {
  PlayerOne = 'X',
  PlayerTwo = "O",
}

export class Game {
  private player = Players.PlayerOne;
  private gameBoard: Board = new Board()

  play(number1: number, number2: number) {
    this.gameBoard.play({x: number1, y: number2}, this.player)
    this.changePlayer();
  }

  board() {
    return this.gameBoard.printBoard();
  }

  private changePlayer() {
    this.player === Players.PlayerTwo
      ? (this.player = Players.PlayerOne)
      : (this.player = Players.PlayerTwo);
  }
}
