module.exports = {
  testEnvironment: "node",
  roots: [
    "src"
  ],
  modulePaths: [
    "node_modules"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  transform: {
    "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  testRegex: "/__tests__/.*test*\\.(ts|tsx|js)$"
};