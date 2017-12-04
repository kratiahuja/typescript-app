module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  "plugins": [
    "prettier"
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember-best-practices/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'ember-best-practices/no-global-jquery': 'error',
    "prettier/prettier": "error"
  }
};
