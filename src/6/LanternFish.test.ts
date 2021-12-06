import { InputUtil } from "../util/InputUtil";
import { LanternFish } from "./LanternFIsh";

let lanternfish: LanternFish;
let testData = "3,4,3,1,2";

test("part 1", () => {
  lanternfish = new LanternFish(testData);

  expect(lanternfish.countNumberOfFishAfterDays(18)).toBe(26);

  expect(lanternfish.countNumberOfFishAfterDays(80)).toBe(5934);
});

test("calculate 1", async () => {
  let util = new InputUtil("/day6.txt");
  let input = await util.readFile();
  lanternfish = new LanternFish(input[0]);

  expect(lanternfish.countNumberOfFishAfterDays(80)).toBe(362639);
});

test("part 2", () => {
  lanternfish = new LanternFish(testData);

  expect(lanternfish.countNumberOfFishAfterDays(256)).toBe(26984457539);
});

test("calculate 2", async () => {
  let util = new InputUtil("/day6.txt");
  let input = await util.readFile();
  lanternfish = new LanternFish(input[0]);

  expect(lanternfish.countNumberOfFishAfterDays(256)).toBe(1639854996917);
});
