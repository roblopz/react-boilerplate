const path = require('path');

const root = path.resolve(__dirname, '../');
const appRoot = path.resolve(root, 'app');

module.exports = {
  root,
  appEntry: path.resolve(appRoot, 'index.tsx'),
  distPath: path.resolve(root, 'dist'),
  tsBuildPath: path.resolve(root, 'build'),
  indexHtml: path.resolve(appRoot, 'assets/index.html'),
  assets: path.resolve(appRoot, 'assets')
};