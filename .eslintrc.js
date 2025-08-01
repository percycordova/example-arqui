/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'tailwindcss'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'tailwindcss/no-custom-classname': 'off',

    // 👇 Reglas de espacios entre líneas
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'const', next: 'function' },
      { blankLine: 'always', prev: 'let', next: 'function' },
      { blankLine: 'always', prev: 'function', next: 'function' },
      { blankLine: 'any', prev: '*', next: '*' } // permite una sola línea
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }]
  }
};
