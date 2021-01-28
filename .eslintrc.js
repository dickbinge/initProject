/*
 * @Description: 
 * @Version: 2.0
 * @Autor: jingbin
 * @Date: 2021-01-27 09:22:05
 * @LastEditors: jingbin
 * @LastEditTime: 2021-01-28 10:17:17
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "linebreak-style": [0, "error", "windows"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "import/prefer-default-export": "off",
    '@typescript-eslint/class-name-casing': ['off'],
  },
};
