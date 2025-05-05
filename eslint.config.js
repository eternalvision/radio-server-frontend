import react from 'eslint-plugin-react';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,

  {
    ignores: ['dist/**/*', 'node_modules/**/*', '__tests__/**/*'],

    files: ['**/*.{js,jsx}'],

    languageOptions: {
      env: { browser: true, es2023: true },
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      'jsx-quotes': ['error', 'prefer-single'],
      'react/jsx-boolean-value': 'error',
      'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
      'react/jsx-curly-spacing': [
        'error',
        {
          attributes: { when: 'never' },
          children: { when: 'never' },
          allowMultiline: true,
        },
      ],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-handler-names': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
      'react/jsx-no-undef': 'error',
      'react/jsx-pascal-case': ['error', { allowAllCaps: false }],
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-uses-vars': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'allow',
        },
      ],

      'prettier/prettier': 'error',

      indent: 'off',
      'linebreak-style': ['error', 'unix'],
      'comma-spacing': ['error', { before: false, after: true }],
      'eol-last': ['error', 'always'],
      'no-unused-expressions': ['error', { allowShortCircuit: true }],
      'no-duplicate-imports': 'error',
      semi: ['error', 'always'],
      'no-console': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'array-bracket-spacing': ['error', 'never'],
      'no-unused-vars': ['error', { varsIgnorePattern: '^react$', argsIgnorePattern: '^_' }],
      'space-before-function-paren': ['error', 'always'],
      'react/jsx-uses-react': 'off',
    },
  },
];
