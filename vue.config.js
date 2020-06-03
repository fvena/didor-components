const path = require('path');

const docsPath = './docs';
const packagePath = './packages';

module.exports = {
  chainWebpack: config => {
    config.plugin('copy').tap(([pathConfigs]) => {
      if (!pathConfigs) return [];
      const fromPackages = path.resolve(packagePath);
      const fromDocs = path.resolve(docsPath);
      const toPackages = `${pathConfigs[0].to}/${packagePath}`;
      const toDocs = `${pathConfigs[0].to}/${docsPath}`;
      const configPackages = {
        from: fromPackages,
        to: toPackages,
        toType: 'dir',
      };
      const configDocs = {
        from: fromDocs,
        to: toDocs,
        toType: 'dir',
      };
      pathConfigs.push(configPackages);
      pathConfigs.push(configDocs);
      return [pathConfigs];
    });
  },
};
