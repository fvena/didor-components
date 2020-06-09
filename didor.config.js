module.exports = {
  title: 'Didor Components',
  logo: '/assets/logo.svg',
  folders: ['/docs', '/packages'],
  didorDocs: true,
  didorFramework: true,
  build: {
    onlyMarkdown: true,
    assets: '/packages/assets',
  },
  lib: {
    components: '/packages/index.js',
    styles: '/node_modules/@didor/framework/src/index.scss',
    shareStyles: '/node_modules/@didor/framework/src/_didor-share.scss',
  },
};
