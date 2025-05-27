const { FlatCompat } = require("@eslint/eslintrc");
const compat = new FlatCompat();

const prettierPlugin = require("eslint-plugin-prettier");
const reactNativePlugin = require("eslint-plugin-react-native");

module.exports = [
  ...compat.extends("expo"),
  ...compat.extends("prettier"),
  {
    plugins: {
      prettier: prettierPlugin,
      "react-native": reactNativePlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "react-native/no-unused-styles": "error",
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
  },
];
