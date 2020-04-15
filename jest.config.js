module.exports = {
    preset: 'react-native',
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|react-router-native|react-native-[a-z-]+)/)',
    ],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    setupFilesAfterEnv: ['./__tests__/setup/enzyme.js'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
