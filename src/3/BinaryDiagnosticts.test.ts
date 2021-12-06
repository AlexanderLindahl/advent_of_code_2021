import { InputUtil } from "../util/InputUtil";
import { BinaryDiagnostics } from "./BinaryDiagnostics";

let bd: BinaryDiagnostics;
let util: InputUtil;
let testData: string[];
beforeEach(() => {
  bd = new BinaryDiagnostics();
  util = new InputUtil("/day3.txt");
  testData = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
  ];
});

test("", () => {
  expect(bd.calculatePowerConsumption(testData)).toBe(198);
});

test("calculate part 1", async () => {
  let input = await util.readFile();

  expect(bd.calculatePowerConsumption(input)).toBe(3009600);
});
test("verify life support", () => {
  //expect(bd.calculateLifeSupportRating(testData)).toBe(230);
});

test("calculate part 2", async () => {
  let input = await util.readFile();

  expect(bd.calculateLifeSupportRating(input)).toBe(6940518);
});
