import eslint from "@eslint/js";
import next from "@next/eslint-plugin-next";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import typescript from "typescript-eslint";

export default defineConfig([
  eslint.configs.recommended,
  ...typescript.configs.recommended,
  next.configs["core-web-vitals"],
  reactHooks.configs.flat["recommended-latest"],
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  globalIgnores([
    ".next/**",
    "build/**",
    "node_modules/**",
    "out/**",
    "playwright-report/**",
    "reference/**",
    "test-results/**",
    "next-env.d.ts",
  ]),
]);
