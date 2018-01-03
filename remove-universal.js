const { spawn } = require('child_process');

const fs = require('fs');

function runCliCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });

    child.on('close', code => {
      if (code !== 0) {
        reject(new Error(`${ command } ${ args.join(' ') }`));
        return;
      }
      resolve();
    });
  });
}

function uninstallPackages(dependencies) {
  // Dependencies
  const args = ['uninstall', '--save', ...dependencies];

  console.log('\n★★ Removing server rendering dependencies\n'); // eslint-disable-line no-console

  runCliCommand('npm', args).then(() => {
    console.log('\n★★ Removing files:\n'); // eslint-disable-line no-console

    fs.unlinkSync('webpack.config.server.js');
    console.log('- webpack.config.server.js'); // eslint-disable-line no-console
    fs.unlinkSync('source/js/server.js');
    console.log('- server.js'); // eslint-disable-line no-console
    fs.unlinkSync('source/js/components/server/ServerHTML.jsx');
    console.log('- ServerHTML.jsx'); // eslint-disable-line no-console
    fs.rmdirSync('source/js/components/server/');
    console.log('- components/server\n'); // eslint-disable-line no-console

    console.log('★★ Removing self:\n'); // eslint-disable-line no-console
    fs.unlinkSync('remove-universal.js');
    console.log('- remove-universal.js\n'); // eslint-disable-line no-console

    console.log( // eslint-disable-line no-console
      '★★ Removed server rendering dependencies and files.\n\n' +
      '   But you have to manually remove unused code from\n' +
      '   "source/js/config/store.js" which is marked with:\n' +
      '   // Remove if you are not using server rendering.\n\n' +
      '   You should remove "server" and "universal" tasks.\n' +
      '   from "package.json" too.\n'
    );
  });
}

uninstallPackages(['concurrently', 'nodemon', 'express', 'remotedev-serialize']);
