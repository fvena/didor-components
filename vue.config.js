module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "./node_modules/@didor/framework/src/_didor-share.scss";
          @import "./packages/design/_var.scss";
        `,
      },
    },
  },
};
