export class LanternFish {
  private fishes: number[];

  constructor(_fishes: string) {
    this.fishes = this.mapFish(_fishes);
  }

  countNumberOfFishAfterDays = (days: number) => {
    let counts = new Array(9).fill(0);

    this.fishes.forEach((fish) => {
      counts[fish]++;
    });
    for (let day = 0; day < days; day++) {
      const count = counts.shift();
      counts = [...counts, count!];
      counts[6] += count!;
    }
    return counts.reduce((acc, a) => acc + a);
  };

  private mapFish = (input: string) => {
    return input.split(",").map((number) => parseInt(number, 10));
  };
}
