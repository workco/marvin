const fs = require('fs');
const { runCliCommand } = require('./helpers');

function addHuskyHooksToPackageJSON() {
  return new Promise((resolve, reject) => {
    // Install husky
    runCliCommand('npm', ['install', '--save', 'husky']).then(() => {
      // Read package.json from project's root folder
      const packageJSON = require(`${ process.cwd() }/package.json`);

      // Add husky config
      packageJSON.husky = {
        hooks: {
          'pre-commit': 'npm run lint',
          'pre-push': 'npm test',
        },
      };

      // Write it back to package.json
      fs.writeFileSync(`${ process.cwd() }/package.json`, JSON.stringify(packageJSON, null, 2));

      resolve();
    }).catch(reject);;
  });
}


module.exports = {
  addHuskyHooksToPackageJSON,
};
