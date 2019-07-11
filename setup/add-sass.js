const fs = require('fs');
const { runCliCommand, replaceInFile } = require('./helpers');

function addSass() {
  return new Promise((resolve, reject) => {
    // Install node-sass
    runCliCommand('npm', ['install', '--save', 'node-sass']).then(() => {
      // Change css extension to scss
      fs.renameSync(`${ process.cwd() }/src/styles/index.css`, `${ process.cwd() }/src/styles/index.scss`);

      // Replace 'index.css' for 'index.scss' in index.tsx
      const appIndexPath = `${ process.cwd() }/src/index.tsx`;

      replaceInFile(appIndexPath, 'index.css', 'index.scss');

      resolve();
    }).catch(reject);;
  });
}


module.exports = {
  addSass,
};
