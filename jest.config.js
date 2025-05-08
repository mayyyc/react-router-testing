// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest/presets/default-esm", // Use this preset for ESM projects
  testEnvironment: "node",
  transform: {
    // Process .ts and .tsx files using ts-jest with ESM support
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        // If your tsconfig.json is not in the root or named differently, specify its path:
        // tsconfig: './tsconfig.json' // Or './tsconfig.test.json' if you have one
      },
    ],
  },
  moduleNameMapper: {
    // If you use path aliases in your tsconfig.json (e.g., "@/*": ["src/*"])
    // you'll need to map them here for Jest. For example:
    // "^@/(.*)$": "<rootDir>/src/$1"
  },
  // This helps Jest understand that .ts and .tsx files should be treated as ES modules
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
};
