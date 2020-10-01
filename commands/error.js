// ### DEPENDENCIES ###

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// ### M ###
// ### A ###
// ### I ###
// ### N ###

module.exports = {
  BadArgument: () => {
    console.log(` ${chalk.bold.red('404 - Argument not found')}\n\n type ${chalk.gray('$')} ${chalk.cyan('tascli')} ${chalk.bold('help')} to find a available command.
    `);
  },
  WhereAreArgument: () => {
    console.log(` ${chalk.bold.red('Where are the argument?')}\n\n Have you forgot the argument? \n Type ${chalk.gray('$')} ${chalk.cyan('tascli')} ${chalk.bold('help')} to find a available command.
    `);
  }
};
