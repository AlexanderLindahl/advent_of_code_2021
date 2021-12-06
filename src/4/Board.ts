type NumberInfo = {
  value: number;
  row: number;
  col: number;
};

export class Board {
  public numbers: number[][];
  public isAWin = false;
  public winValue?: number;

  private numberLookup: { [key: number]: NumberInfo } = {};
  private markedNumbers = new Set<NumberInfo>();
  private unmarkedNumbers = new Set<NumberInfo>();

  constructor(numbers: number[][]) {
    this.numbers = numbers;
    numbers.forEach((row, rowIdx) => {
      row.forEach((num, colIdx) => {
        const numInfo = { value: num, row: rowIdx, col: colIdx };
        this.numberLookup[num] = numInfo;
        this.unmarkedNumbers.add(numInfo);
      });
    });
  }

  public mark(num: number) {
    if (this.numberLookup[num] == null) return false;

    this.unmarkedNumbers.delete(this.numberLookup[num]);
    this.markedNumbers.add(this.numberLookup[num]);
    this.isAWin = this.didWin();
    if (this.isAWin && this.winValue == null) {
      this.winValue = this.calculateWinValue(num);
    }
    return this.isAWin;
  }

  public toString() {
    return this.numbers.map((it) => it.join(", ")).join("\n");
  }

  private calculateWinValue(lastCalled: number) {
    let unmarkedTotal = 0;
    this.unmarkedNumbers.forEach((it) => (unmarkedTotal += it.value));
    return unmarkedTotal * lastCalled;
  }

  private didWin() {
    const rowLookup = Array(5);
    const colLookup = Array(5);
    this.markedNumbers.forEach((it) => {
      let rowVal = rowLookup[it.row] ?? 0;
      let colVal = colLookup[it.col] ?? 0;
      rowLookup[it.row] = rowVal + 1;
      colLookup[it.col] = colVal + 1;
    });
    return rowLookup.includes(5) || colLookup.includes(5);
  }
}
