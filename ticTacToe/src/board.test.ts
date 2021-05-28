import { createBoard } from "./board";

describe('board', () => {
  it('should create a new board', () => {
    const board = createBoard()
    expect(board).toEqual([['','',''],['','',''],['','','']])
  });
});