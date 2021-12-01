import * as fs from "fs";
import * as rd from "readline";
import * as path from "path";

export class InputUtil {
  private reader: rd.Interface;

  constructor(fileName: string) {
    this.reader = rd.createInterface(
      fs.createReadStream(path.join(__dirname, "../input") + fileName)
    );
  }

  readFile = async (): Promise<string[]> => {
    return new Promise((resolve) => {
      const lines: string[] = [];

      this.reader.on("line", async (line: string) => {
        lines.push(line);
      });

      this.reader.on("close", () => {
        console.log(`Data has been read`);
        resolve(lines);
      });
    });
  };
}
