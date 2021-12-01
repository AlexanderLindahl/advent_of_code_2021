export class IncreasementCalculator implements ICalculateIncreasments {
  calculateIncreasments = (input: string[]): number => {
    let count = 0;
    input.map((line, index) => {
      if (index === 0) {
        return;
      }
      parseInt(input[index - 1]);
      if (parseInt(line) > parseInt(input[index - 1])) {
        count++;
      }
    });
    return count;
  };

  calculateThreeMeasurementWindowIncreasments = (input: string[]): number => {
    const calculatedMergedLines = this.calculateMergedLines(input);
    return this.calculateIncreasments(calculatedMergedLines);
  };

  private calculateMergedLines = (input: string[]): string[] => {
    return input.map((line, index) => {
      const next = input[index + 1];
      const next2 = input[index + 2];

      let res = parseInt(line);
      if (next2) {
        res += parseInt(next2);
      }
      if (next) {
        res += parseInt(next);
      }
      return res.toString();
    });
  };
}
