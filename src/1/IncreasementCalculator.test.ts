import { InputUtil } from "../util/InputUtil";
import { IncreasementCalculator } from "./IncreasmentCalculator";

describe("IncreasmentCalculator", () => {
  let calculator: ICalculateIncreasments;
  let testData: string[];
  beforeEach(() => {
    calculator = new IncreasementCalculator();
    testData = [
      "199",
      "200",
      "208",
      "210",
      "200",
      "207",
      "240",
      "269",
      "260",
      "263",
    ];
  });

  it("should calculate number of increasments from previous", () => {
    expect(calculator.calculateIncreasments(testData)).toBe(7);
  });

  it("Should calculate part 1", async () => {
    const util = new InputUtil("/day1.txt");
    let input = await util.readFile();

    let res = calculator.calculateIncreasments(input);

    expect(res).toBe(1233);
  });

  it("should calculate number of increasments in new way", () => {
    expect(
      calculator.calculateThreeMeasurementWindowIncreasments(testData)
    ).toBe(5);
  });

  it("Should calculate part 2", async () => {
    const util = new InputUtil("/day1.txt");
    let input = await util.readFile();

    let res = calculator.calculateThreeMeasurementWindowIncreasments(input);

    expect(res).toBe(1275);
  });
});
