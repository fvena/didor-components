module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/*.spec.[jt]s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: ['packages/**/*.{js,vue}'],
  coverageReporters: ['text', 'text-summary'],
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
};
