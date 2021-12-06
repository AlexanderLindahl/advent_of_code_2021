import { InputUtil } from "../util/InputUtil";
import { VentSystem } from "./VentSystem";

let system: VentSystem;
let util: InputUtil;
let testData = [
  "0,9 -> 5,9",
  "8,0 -> 0,8",
  "9,4 -> 3,4",
  "2,2 -> 2,1",
  "7,0 -> 7,4",
  "6,4 -> 2,0",
  "0,9 -> 2,9",
  "3,4 -> 1,4",
  "0,0 -> 8,8",
  "5,5 -> 8,2",
];
beforeEach(() => {
  util = new InputUtil("/day5.txt");
  system = new VentSystem();
});

test("test part 1", () => {
  expect(system.calculateSafeSpots(testData)).toBe(5);
});

test("calculate part 1", async () => {
  let input = await util.readFile();

  expect(system.calculateSafeSpots(input)).toBe(7085);
});

test("test part 2", () => {
  expect(system.calculateSafeSpots(testData, true)).toBe(12);
});

test("calculate part 1", async () => {
  let input = await util.readFile();

  expect(system.calculateSafeSpots(input, true)).toBe(20271);
});
