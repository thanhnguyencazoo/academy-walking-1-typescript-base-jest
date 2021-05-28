export class Game {
  play(number1: number, number2: number) {
    console.log(number1, number2);
  }
  board() {
    const board = [
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    return board;
  }
}
