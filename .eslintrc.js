module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // imports-loader needs to be installed, else the error "Failed to load
  extends: [
    'airbnb-typescript-prettier',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended'
  ], // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.],
  // parser 'babel-eslint' declared in '.eslintrc': Cannot find module 'babel-eslint'" shows up
  plugins: ['jest']
};
