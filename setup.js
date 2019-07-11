const inquirer = require('inquirer');
const { addHuskyHooksToPackageJSON } = require('./setup/add-husky-hooks-to-package-json');
const { addReactSnapToPackageJSON } = require('./setup/add-react-snap-to-package-json');
const { deleteSetupFiles } = require('./setup/delete-setup-files');
const { addSass } = require('./setup/add-sass');
const { replaceName } = require('./setup/replace-name');
const { runCliCommand } = require('./setup/helpers');

const {
  checkForMinNodeVersion,
} = require('./setup/helpers')

checkForMinNodeVersion(12);

inquirer.prompt([
  {
    type: 'input',
    name: 'projectName',
    message: 'Please enter your project name:',
    validate: function (value) {
      if (value.trim().length === 0) {
        return 'Project name is required';
      }

      return true;
    },
  },
  {
    type: 'list',
    name: 'addSASS',
    message: 'Do you want to add SASS support?',
    choices: ['Yes', 'No'],
    filter: function (val) {
      return val === 'Yes';
    },
  },
  {
    type: 'list',
    name: 'reactSnap',
    message: 'Do you want to add react-snap?',
    choices: ['Yes', 'No'],
    filter: function (val) {
      return val === 'Yes';
    },
  },
  {
    type: 'list',
    name: 'addGitHooks',
    message: 'Do you want to add git hooks?',
    choices: ['Yes', 'No'],
    filter: function (val) {
      return val === 'Yes';
    },
  },
  {
    type: 'list',
    name: 'deleteSetupFiles',
    message: 'Do you want to delete setup files?',
    choices: ['Yes', 'No'],
    filter: function (val) {
      return val === 'Yes';
    },
  },
])
.then(answers => {
  console.log('\n');
  console.log(answers);

  inquirer.prompt([
    {
      type: 'list',
      name: 'everythingOk',
      message: `Looks OK?`,
      choices: ['Yes', 'No'],
      filter: function (val) {
        return val === 'Yes';
      },
    },
  ])
  .then(async confirmAnswer => {
    if (confirmAnswer.everythingOk) {
      try {
        replaceName(answers.projectName);

        // SASS
        if (answers.addSASS) {
          await addSass();
        }

        // React snap
        if (answers.reactSnap) {
          await addReactSnapToPackageJSON();
        }

        // Hooks
        if (answers.addGitHooks) {
          await addHuskyHooksToPackageJSON();
        }

        // Delete files
        if (answers.deleteSetupFiles) {
          deleteSetupFiles();
        }
      } catch(e) {
        console.log(e);
        runCliCommand('git', ['checkout', '.']);
      }
    } else {
      console.log(`\n★★ Nothing changed, run script to try that again\n`);
    }
  });
});
