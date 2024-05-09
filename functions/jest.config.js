module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],  
  testMatch: ['**/*.test.ts'], 
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverage: true,        
  coverageDirectory: '<rootDir>/coverage', 
};
