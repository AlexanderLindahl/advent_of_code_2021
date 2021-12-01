import { InputUtil } from "./InputUtil";

let util: InputUtil;
beforeEach(() => {
  util = new InputUtil("/test.txt");
});
describe("InputUtil", () => {
  it("should test the inputUtil", async () => {
    let res = await util.readFile();

    expect(res[0]).toBe("test1");
    expect(res[1]).toBe("test2");
    expect(res[2]).toBe("test3");
  });
});
