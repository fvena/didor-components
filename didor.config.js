module.exports = {
  devServer: {
    open: false,
  },
  content: {
    folders: ['/docs', '/packages'],
    didorDocs: true,
    didorStyles: true,
  },
  customize: {
    title: 'Didor Components',
    logo: '/assets/logo.svg',
    pwa: {
      sourceFile: '/docs/assets/appIcon.svg',
      outputFolder: '/docs/img',
      splashIcon: '/docs/assets/splashIcon.svg',
      background: '#E6E6E6',
      bgSplash: 'linear-gradient(135deg, #F2385D 0%, #760630 100%)',
      padding: '25%',
      paddingSplash: '20% 30%',
    },
  },
  demo: {
    components: '/packages/index.js',
    styles: '/node_modules/@didor/styles/src/index.scss',
    shareStyles: '/node_modules/@didor/styles/src/_didor-share.scss',
  },
  build: {
    path: '',
    onlyMarkdown: true,
    assets: '/packages/assets',
  },
};
