export class VentSystem {
  private ventGrid: number[][] = [];

  constructor() {
    this.ventGrid = this.createVentGrid(1000, 1000);
  }
  calculateSafeSpots = (input: string[], diagonal = false) => {
    input.forEach((line) => {
      const endings = line.trim().split("->");

      let start = endings[0].split(",");
      let stop = endings[1].split(",");
      const x1 = parseInt(start[0]);
      const y1 = parseInt(start[1]);
      const x2 = parseInt(stop[0]);
      const y2 = parseInt(stop[1]);

      if (x1 === x2) {
        this.drawHorizontalLine(x1, y1, y2);
      }

      if (y1 === y2) {
        this.drawVerticalLine(y1, x1, x2);
      }
      if (diagonal && x1 !== x2 && y1 !== y2) {
        this.drawDiagonalLine(x1, y1, x2, y2);
      }
    });

    return this.getSafeSpots();
  };

  private drawHorizontalLine = (row: number, x1: number, x2: number) => {
    for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
      this.ventGrid[row][x]++;
    }
  };
  private drawVerticalLine = (column: number, y1, y2) => {
    for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
      this.ventGrid[y][column]++;
    }
  };

  private drawDiagonalLine = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ) => {
    const stepX = x1 < x2 ? 1 : -1;
    const stepY = y1 < y2 ? 1 : -1;
    for (let i = 0; i <= Math.abs(x1 - x2); i++) {
      const x = x1 + i * stepX;
      const y = y1 + i * stepY;
      this.ventGrid[x][y]++;
    }
  };

  private getSafeSpots = () => {
    let safeSpots = 0;
    this.ventGrid.forEach((row) =>
      row.forEach((spot) => {
        if (spot >= 2) {
          safeSpots++;
        }
      })
    );
    return safeSpots;
  };

  private createVentGrid = (rows: number, columns: number) => {
    let arr: number[][] = [];
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let y = 0; y < columns; y++) {
        arr[i][y] = 0;
      }
    }
    return arr;
  };
}
