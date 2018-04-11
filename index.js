module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    jest: true
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'no-unused-vars': ['error', { args: 'none' }],
    'no-multiple-empty-lines': ['error', {max: 1}],
    'eol-last': ['error', 'always']
  }
};
