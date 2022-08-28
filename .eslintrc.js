module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['prettier'],
  rules: {
    'operator-linebreak': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'max-classes-per-file': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-syntax': 0,
    'max-len': ['error', { code: 120 }],
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-continue': 0,
    'max-len': 0,
  },
};
