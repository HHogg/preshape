export default [
  {
    files: ['workspaces/**/*.{ts,tsx}'],
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'google',
      'eslint-config-prettier',
    ],
    parser: '@typescript-eslint/parser',
    // ignorePatterns: ['workspaces/package/src/Icon/*'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', 'react-refresh', '@typescript-eslint'],
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'guard-for-in': 'off',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        },
      ],
      'no-console': [2, { allow: ['warn', 'error'] }],
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': 'warn',
      'react/display-name': 'off',
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
    },
  },
];
