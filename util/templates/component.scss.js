module.exports = (componentName) => ({
  content: `@import "../colors.scss";
  @import "../typography.scss";

  .fooBar {
    color: blue;
  }
`,
  extension: `.scss`
});
