import { Players } from "./Game";

export enum Blank {
  Blank = ''
}

type TileState = Players | Blank

export class Board {
  private board: TileState[][] = [
    [Blank.Blank,Blank.Blank, Blank.Blank],
    [Blank.Blank,Blank.Blank, Blank.Blank],
    [Blank.Blank,Blank.Blank, Blank.Blank],
  ]

  play(coordinates: {x: number, y: number }, player: Players) {
    if (this.board[coordinates.x][coordinates.y] !== Blank.Blank) {
      throw Error("location already taken")
    }
    this.board[coordinates.x][coordinates.y] = player;
  }

  printBoard() {
    return this.board
  }
}