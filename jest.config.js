module.exports = {
  roots: ["<rootDir>/ticTacToe"],
  preset: "ts-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};
