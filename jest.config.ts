import type { Config } from 'jest';

export default async (): Promise<Config> => {
    return {
        "bail": 1,
        "collectCoverage": true,
        "coverageDirectory": "coverage",
        "coverageProvider": "v8",
        "testEnvironment": "node",
        "verbose": true
    };
};
