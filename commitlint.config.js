module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [0, 'always'],
    'footer-leading-blank': [0, 'always'],
  }
};
