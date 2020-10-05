module.exports = {
  ...require("@snowpack/app-scripts-react/jest.config.js")(),
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{steps,test}.{js,jsx,ts,tsx}"
  ],
};
