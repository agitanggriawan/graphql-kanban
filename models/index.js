const glob = require('glob');
const path = require('path');

const mods = {};

const files = glob.sync(path.join(__dirname, '*.js'), {
  ignore: [`${path.join(__dirname, 'index.js')}`],
});
files.forEach((file) => {
  const name = path.basename(file, '.js');
  mods[name] = require(file);
});

module.exports = mods;
