import { Config } from 'jest'
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '.coverage',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  testMatch: [
    '<rootDir>/src/**/*.{spec,test}.{js,ts}',
    '<rootDir>/src/*.{spec,test}.{js,ts}',
    '<rootDir>/src/**/__tests__/**/*.{js,ts}',
  ],
}

export default config
