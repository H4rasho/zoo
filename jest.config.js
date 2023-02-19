/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: ".spec.ts$",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx$": "ts-jest",
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
  },
};
