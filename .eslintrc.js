const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    plugins: ['react', 'import', 'prettier'],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        useJSXTextNode: false,
        project: './tsconfig.json',
        tsconfigRootDir: '.',
    },
    env: {
        browser: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': OFF,
        'no-plusplus': OFF,
        'prettier/prettier': [
            ERROR,
            {
                tabWidth: 4,
                singleQuote: true,
                printWidth: 100,
                trailingComma: 'all',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            ERROR,
            {
                varsIgnorePattern: '^_',
                args: 'after-used',
                ignoreRestSiblings: true,
                caughtErrorsIgnorePattern: 'e|err|error',
            },
        ],
        'react/jsx-filename-extension': [
            ERROR,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
        'import/extensions': [
            ERROR,
            'always',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};
