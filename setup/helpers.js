const { spawn } = require('child_process');
const fs = require('fs');

function checkForMinNodeVersion(minMajorVersion) {
  var currentNodeVersion = process.versions.node;
  var semver = currentNodeVersion.split('.');
  var major = semver[0];

  if (major < minMajorVersion) {
    console.error(
      `You are running Node ${ currentNodeVersion }.\n` +
      `Marvin requires Node ${ minMajorVersion } or higher.\n` +
      'Please update your version of Node.'
    );

    process.exit(1); // eslint-disable-line no-process-exit
  }
}

function runCliCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });

    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${ command } ${ args.join(' ') }`,
        });
      }

      resolve();
    });
  });
}

function deleteFolder(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index){
      const curPath = `${ path }/${ file }`;

      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolder(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(path);
  }
};

function replaceInFile(path, toReplace, replaceWith) {
  const data = fs.readFileSync(path, 'utf8');

  const result = data.replace(toReplace, replaceWith);

  fs.writeFileSync(path, result, 'utf8');
}

module.exports = {
  runCliCommand,
  checkForMinNodeVersion,
  deleteFolder,
  replaceInFile,
};
