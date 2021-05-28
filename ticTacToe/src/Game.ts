export class Game {
  private player = "X";

  play(number1: number, number2: number) {
    this.gameBoard[number1][number2] = this.player;
    this.changePlayer();
  }

  private gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  board() {
    return this.gameBoard;
  }

  private changePlayer() {
    this.player === "O" ? (this.player = "X") : (this.player = "O");
  }
}
