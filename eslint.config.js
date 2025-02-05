import globals from 'globals';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Базовые правила
      indent: ['error', 2],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-multi-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'prefer-const': 'error',
      'max-len': ['error', { code: 100 }],
      'padded-blocks': ['error', 'never'],
      'prefer-template': 'error',
      'quote-props': ['error', 'as-needed'],
      'space-in-parens': ['error', 'never'],

      // Правила импорта
      'import/newline-after-import': 'error',
      'import/prefer-default-export': 'error',
    },
    ignores: ['node_modules/', 'dist/'],
  },
];
