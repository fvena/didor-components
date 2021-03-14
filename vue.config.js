module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "./node_modules/@didor/styles/src/_didor-share.scss";
          @import "./packages/design/_var.scss";
        `,
      },
    },
  },
};
