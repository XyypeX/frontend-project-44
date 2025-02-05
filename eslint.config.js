import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest', // Используем последнюю версию ECMAScript
      sourceType: 'module', // Указываем, что используем модули
    },
    rules: {
      // Базовые правила
      'indent': ['error', 2], // Отступы в 2 пробела
      'quotes': ['error', 'single'], // Использование одинарных кавычек
      'semi': ['error', 'always'], // Точка с запятой обязательна
      'no-multi-spaces': 'error', // Запрет на множественные пробелы
      'eol-last': ['error', 'always'], // Новая строка в конце файла
      'no-trailing-spaces': 'error', // Запрет на пробелы в конце строк
      'prefer-const': 'error', // Использование const вместо let,если переменная не переопределяется
      'max-len': ['error', { 'code': 100 }], // Максимальная длина строки 100 символов
    },
    ignores: ['node_modules/', 'dist/'], // Игнорируемые директории
  },
];
