// ### DEPENDENCIES ###

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// CLIUI - Easily create complex multi-column command-line-interfaces.
const ui = require('cliui')();

// ### M ###
// ### A ###
// ### I ###
// ### N ###

module.exports = function () {

  ui.div({
    text: `
            ${chalk.bold('Available commands')}:

            ${chalk.gray('$')} ${chalk.cyan('tascli')}         - list all tasks
            ${chalk.gray('$')} ${chalk.cyan('tascli')} create  - create a task
            ${chalk.gray('$')} ${chalk.cyan('tascli')} remove  - delete a task
            ${chalk.gray('$')} ${chalk.cyan('tascli')} move    - set the status of a task
          `,
    width: 55
  }, {
    text: `
            ${chalk.bold('About tascli')}:

            Tascli is an open-source task-manager like monday.com, but for command line nerds.
          `,
    width: 55
  })
  console.log(ui.toString());
};
