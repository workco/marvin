const fs = require('fs');
const { runCliCommand } = require('./helpers');

function addReactSnapToPackageJSON() {
  return new Promise((resolve, reject) => {
    // Install react-snap
    runCliCommand('npm', ['install', '--save', 'react-snap']).then(() => {
      // Read package.json from project's root folder
      const packageJSON = require(`${ process.cwd() }/package.json`);

      // Add postbuild script
      packageJSON.scripts.postbuild = 'react-snap';

      // Write it back to package.json
      fs.writeFileSync(`${ process.cwd() }/package.json`, JSON.stringify(packageJSON, null, 2));

      // Creating a script which tells the user if app is running in the headless browser
      const isSnapScript = [
        '// Tells us if app is running in the headless browser',
        '// while being crawled by react-snap\n',
        'const isReactSnap = navigator.userAgent.toLowerCase().search(\'reactsnap\') >= 0;\n',
        'export default isReactSnap;',
      ];

      fs.writeFileSync('./src/app/utils/is-react-snap.ts', isSnapScript.join('\n'));

      resolve();
    }).catch(reject);
  });
}

module.exports = {
  addReactSnapToPackageJSON,
}
