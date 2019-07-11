const fs = require('fs');
const { deleteFolder } = require('./helpers');

function deleteSetupFiles() {
  deleteFolder(`${ process.cwd() }/setup`);

  fs.unlinkSync(`${ process.cwd() }/setup.js`);
}

module.exports = {
  deleteSetupFiles,
}
