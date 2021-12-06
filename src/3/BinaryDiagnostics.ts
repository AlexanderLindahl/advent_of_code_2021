export class BinaryDiagnostics {
  calculatePowerConsumption = (input: string[]): number => {
    const list: string[] = this.reArrangeChars(input);

    let bits: { gammaBit: string; epsilon: string } = this.calculateBits(list);
    let gammRate = parseInt(bits.gammaBit, 2);
    let epsilonRate = parseInt(bits.epsilon, 2);

    return gammRate * epsilonRate;
  };

  calculateLifeSupportRating = (input: string[]) => {
    const oxygenGeneratorRating = this.calculateRating(input, "1");

    const scrubberRating = this.calculateRating(input, "0");

    return oxygenGeneratorRating * scrubberRating;
  };

  private calculateRating = (input: string[], char: "1" | "0") => {
    let list = input;
    for (let i = 0; i < list[0].length; i++) {
      if (list.length > 1) {
        let reArranged = this.reArrangeChars(list);
        const oneCount = reArranged[i].match(/1/g)?.length || 0;
        const zeroCount = reArranged[i].match(/0/g)?.length || 0;
        list =
          char === "1"
            ? this.higherThan(list, i, zeroCount, oneCount)
            : this.lowerThan(list, i, zeroCount, oneCount);
      }
    }
    return parseInt(list[0], 2);
  };

  private lowerThan = (
    list: string[],
    i: number,
    zeroCount: number,
    oneCount: number
  ) => {
    if (zeroCount <= oneCount) {
      return list.filter((string) => string[i] === "0");
    } else {
      return list.filter((string) => string[i] === "1");
    }
  };
  private higherThan = (
    list: string[],
    i: number,
    zeroCount: number,
    oneCount: number
  ) => {
    if (oneCount >= zeroCount) {
      return list.filter((string) => string[i] === "1");
    } else {
      return list.filter((string) => string[i] === "0");
    }
  };

  private calculateBits = (input: string[]) => {
    let gammaBit = "";
    let epsilon = "";

    input.forEach((string) => {
      const oneCount = string.match(/1/g)?.length || 0;
      const zeroCount = string.match(/0/g)?.length || 0;

      if (oneCount >= zeroCount) {
        gammaBit += "1";
        epsilon += "0";
      } else {
        gammaBit += "0";
        epsilon += "1";
      }
    });

    return { gammaBit, epsilon };
  };
  private reArrangeChars = (input: string[]) => {
    const list: string[] = [];

    input.forEach((element) => {
      element.split("").forEach((char, i) => {
        list[i] += char;
      });
    });
    return list;
  };
}
