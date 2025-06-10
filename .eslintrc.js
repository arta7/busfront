module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    './node_modules/gts',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.json'],
  },
  "ignorePatterns": ["src/"],
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-console': 'warn',
  },
};

// module.exports = {
//   extends: 'eslint:recommended',
//   rules: {
//     // Add any rules you want to override or set to "off"
//     "no-console": "off", // Example to ignore console warnings
//     // Add more rules as needed
//   },
// };