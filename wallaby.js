module.exports = function (wallaby) {
  return {
    files: [
      "src/*.ts",
      "src/**/*.ts",
      "src/**/*.txt",
      "!src/**/*spec.ts",
      "!src/**/*test*.ts",
    ],

    tests: ["src/**/*test.ts*", "src/test/*.ts"],

    compilers: {
      "**/*.ts?(x)": wallaby.compilers.typeScript(),
    },
    testFramework: "jasmine",
    env: {
      type: "node",
    },
  };
};
