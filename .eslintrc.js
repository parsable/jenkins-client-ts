module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'eslint-config-prettier',
    'plugin:jest/recommended',
    'plugin:import/recommended',
  ],
  env: {
    es6: true,
    browser: false,
    node: true,
    commonjs: false,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['*.yaml', '*.yml', '*.csv'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'warn',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        semi: true,
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        arrowParens: 'avoid',
      },
    ],
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
  },
};
