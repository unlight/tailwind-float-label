import 'eslint-plugin-only-warn';

import pluginJs from '@eslint/js';
import { globalIgnores, defineConfig } from 'eslint/config';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';

export default defineConfig(
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  unicorn.configs.recommended,
  prettier,
  globalIgnores(['dist/**', 'coverage/**', '@generated/**']),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node,
      parserOptions: {
        projectService: true,
      },
      sourceType: 'module',
    },
    rules: {
      'max-lines': [1, { max: 300 }],
      'max-params': [1, { max: 3 }],
      'no-unneeded-ternary': [1],
    },
    settings: {
      node: {
        version: '>=24',
      },
    },
  },
  {
    rules: {
      'unicorn/prevent-abbreviations': [
        'warn',
        {
          replacements: {
            args: false,
          },
        },
      ],
    },
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-objects': [
        'warn',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ['*.config.mjs', '*.config.mts'],
  },
  {
    files: ['**/*.spec.ts', '**/*.e2e-spec.ts'],
    rules: {
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-floating-promises': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      'consistent-return': 0,
      'import/max-dependencies': 0,
      'max-lines': 0,
    },
  },
);
