module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "@swc/jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(some-esmodule-package)/)"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
