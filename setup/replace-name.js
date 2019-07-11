const { replaceInFile } = require('./helpers');

function replaceName(name) {
  replaceInFile(`${ process.cwd() }/package.json`, 'marvin', name);
  replaceInFile(`${ process.cwd() }/package-lock.json`, 'marvin', name);
  replaceInFile(`${ process.cwd() }/public/index.html`, 'Marvin', name);
}


module.exports = {
  replaceName,
};
