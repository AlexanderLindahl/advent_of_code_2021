export class Submarine {
  navigate = (instructions: string[]): number => {
    let horizontal = 0;
    let depth = 0;
    instructions.map((i) => {
      const instruction = this.splitInstruction(i);
      switch (instruction.direction) {
        case "forward":
          horizontal += instruction.steps;
          break;
        case "up":
          depth -= instruction.steps;
          break;
        case "down":
          depth += instruction.steps;
      }
    });

    return horizontal * depth;
  };

  navigateWithAim = (instructions: string[]): number => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    instructions.map((i) => {
      const instruction = this.splitInstruction(i);
      switch (instruction.direction) {
        case "forward":
          {
            horizontal += instruction.steps;
            depth += aim * instruction.steps;
          }

          break;
        case "up":
          aim -= instruction.steps;
          break;
        case "down":
          aim += instruction.steps;
      }
    });
    return horizontal * depth;
  };

  private splitInstruction = (input: string): Instruction => {
    const splitted = input.split(" ");
    if (this.isValidDirection(splitted[0])) {
      return {
        direction: splitted[0] as Direction,
        steps: parseInt(splitted[1]),
      };
    } else {
      throw new Error();
    }
  };

  private isValidDirection = (direction: string) => {
    return direction === "forward" || "down" || "up";
  };
}

type Instruction = {
  direction: Direction;
  steps: number;
};

type Direction = "forward" | "down" | "up";
