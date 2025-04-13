import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  preset: "ts-jest",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  transformIgnorePatterns: ["node_modules/(?!(next|@next)/)"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(test).[jt]s?(x)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: [
    // Modify this to ignore the specific test file
    "/testing/e2e/",
    "/node_modules/",
    "<rootDir>/testing/__tests__/IntegrationTests/page33.test.jsx",
    "<rootDir>/testing/__tests__/UnitTests/LectureVideo/lectureVideo.test.jsx",
  ],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./html-report",
        filename: "report.html",
        expand: true,
      },
    ],
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
