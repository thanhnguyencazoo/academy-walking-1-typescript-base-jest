import { Board } from "./Board";

export enum Players {
  PlayerOne = 'X',
  PlayerTwo = "O",
}

type GameState = 'finished' | 'in progress';

interface GameStatus {
  state: GameState,
  winner: Players
}

export class Game {
  private player = Players.PlayerOne;
  private gameBoard: Board = new Board()

  play(number1: number, number2: number): GameStatus {
    this.gameBoard.play({x: number1, y: number2}, this.player)
    this.changePlayer();
    return {
      state: "finished",
      winner: Players.PlayerOne
    }
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
