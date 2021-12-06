import { InputUtil } from "../util/InputUtil";
import { Submarine } from "./Submarine";

describe("Submarine", () => {
  let submarine: Submarine;
  let util: InputUtil;
  let testData: string[];
  beforeEach(() => {
    submarine = new Submarine();
    util = new InputUtil("/day2.txt");
    testData = [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ];
  });

  it("Should navigate the submarine", () => {
    expect(submarine.navigate(testData)).toBe(150);
  });

  it("should calculate poart 1", async () => {
    let input = await util.readFile();
    expect(submarine.navigate(input)).toBe(1604850);
  });

  it("should calculate with aim", () => {
    expect(submarine.navigateWithAim(testData)).toBe(900);
  });

  it("should calculate poart 2", async () => {
    let input = await util.readFile();
    expect(submarine.navigateWithAim(input)).toBe(1685186100);
  });
});
