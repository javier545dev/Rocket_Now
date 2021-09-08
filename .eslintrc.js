module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-uses-vars': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['off', {}, { usePrettierrc: true }] // Includes .prettierrc.js rules
  }
}
