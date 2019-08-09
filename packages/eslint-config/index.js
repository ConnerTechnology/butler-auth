module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended'
  ],
  rules: {
    'lines-between-class-members': 'off',
    'no-dupe-class-members': 'off',
    'semi': 'error',

    // Prettier
    'prettier/prettier': ['error', { 'singleQuote': true }]
  }
};
