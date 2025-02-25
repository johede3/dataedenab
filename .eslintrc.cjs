/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json", // point to your actual tsconfig.json file
  },
  plugins: ["@typescript-eslint", "@tanstack/query"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "@tanstack/query/exhaustive-deps": "error",
    "prefer-template": "error",
    "@tanstack/query/prefer-query-object-syntax": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_" },
    ],
  },
};

module.exports = config;
