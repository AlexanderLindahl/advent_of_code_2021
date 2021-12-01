import * as fs from "fs";
import * as rd from "readline";
import * as path from "path";

export class InputUtil {
  // Here we import the File System module of node
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  readFile = async (): Promise<string[]> => {
    const reader = rd.createInterface(
      fs.createReadStream(path.join(__dirname, "../input") + this.fileName)
    );

    return new Promise((resolve) => {
      const lines: string[] = [];

      reader.on("line", async (line: string) => {
        console.log(line);
        lines.push(line);
      });

      reader.on("close", () => {
        console.log(`Data has been read,  ${lines}`);
        resolve(lines);
      });
    });
  };
}
