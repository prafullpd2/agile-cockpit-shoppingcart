module.exports = {
    coverageDirectory: 'coverage/agile-cockpit-shopping-cart',
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80
        }
    },
    preset: 'jest-preset-angular',
    testMatch: ['<rootDir>/**/*.spec.ts'],
    setupFilesAfterEnv: '<rootDir>/src/jest.ts',
    moduleNameMapper: {
        "@angular/(.*)": "<rootDir>/node_modules/@angular/$1"
    },
    transformIgnorePatterns: [
        "node_modules/(?!@ngrx|@angular/core|rxjs|date-fns)"
    ],
    modulePaths: ['<rootDir>'],
    coverageDirectory: 'coverage'
}