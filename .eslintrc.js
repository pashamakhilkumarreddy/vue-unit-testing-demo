module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['clear', 'info', 'table', 'time', 'timeEnd', 'warn', 'trace', 'error'],
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_target'],
      },
    ],
  },
};
