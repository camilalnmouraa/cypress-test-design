import globals from "globals";
import pluginJs from "@eslint/js";
import cypressPlugin from "eslint-plugin-cypress";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["cypress/**/*.js"],
    languageOptions: {
      sourceType: "module", //Configura como módulo apenas para arquivos em `cypress/`
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      "cypress/no-unnecessary-waiting": "error",

      //Regras de estilo de código
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
    },
  },
];