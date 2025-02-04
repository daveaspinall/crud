import react from "eslint-plugin-react";
import unicorn from "eslint-plugin-unicorn";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

const defaultConfig = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
);

export default [
  ...defaultConfig,
  {
    ignores: ["**/*.json", "**/*.config.*"],
  },
  {
    plugins: {
      react,
      unicorn,
    },
  },
];
