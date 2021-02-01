module.exports = {
  plugins: {
    "postcss-prepend-imports": {
      files: ["./styles/globals.css"]
    },
    "postcss-easy-import": {},
    "postcss-mixins": {},
    "postcss-nested-ancestors": {},
    "postcss-nesting": {},
    "postcss-nested": {},
    "postcss-preset-env": { stage: 0 }
  }
};
