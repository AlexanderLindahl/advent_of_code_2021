import { Board } from "./Board";

export class Bingo {
  boards: Board[] = [];
  numbers: string[];
  position: number = 0;

  constructor(numbers: string[]) {
    this.numbers = numbers[0].split(",");
    this.createBoards(numbers);
  }

  playBingo = () => {
    let winners: number[] = [];
    for (let i = 0; i < 100; i++) {
      this.drawNumber();
      winners = this.checkWinner(winners);
    }
    return this.boards[winners[0]].winValue;
  };

  getBadestScore = () => {
    let winners: number[] = [];
    for (let i = 0; i < this.numbers.length; i++) {
      this.drawNumber();
      winners = this.checkWinner(winners);
    }

    return this.boards[winners[winners.length - 1]].winValue;
  };

  private drawNumber = () => {
    let drawnNumber = this.numbers[this.position];
    this.boards.forEach((board) => board.mark(parseInt(drawnNumber)));
    if (this.position <= this.numbers.length) {
      this.position++;
    }
  };

  private checkWinner = (winners: number[]): number[] => {
    this.boards.forEach(
      (board, i) => board.isAWin && !winners.includes(i) && winners.push(i)
    );
    return winners;
  };

  private createBoards = (input: string[]) => {
    let board: number[][] = [];
    input.forEach((line) => {
      if (line.trim().length === 0) {
        board.length !== 0 && this.boards.push(new Board(board));
        board = [];
      }
      if (!line.includes(",") && line.trim().length !== 0) {
        let row = line
          .split(" ")
          .filter((number) => number.trim().length !== 0)
          .map((number) => parseInt(number));
        board.push([...row]);
      }
    });
    board !== [] && this.boards.push(new Board(board));
  };
}
