module.exports = {
  extends: 'airbnb-base',
  env: {
    node: true,
    browser: true,
    commonjs: true,
    jest: true
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
  }
};
