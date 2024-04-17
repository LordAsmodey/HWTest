module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['simple-import-sort', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
