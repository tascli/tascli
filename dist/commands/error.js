"use strict";
// ### DEPENDENCIES ###
Object.defineProperty(exports, "__esModule", { value: true });
// CHALK - Terminal string styling done right
const chalk = require("chalk");
// ### M ###
// ### A ###
// ### I ###
// ### N ###
module.exports = {
    BadArgument: () => {
        console.log(` ${chalk.bold.red('404 - Argument not found')}\n\n type ${chalk.gray('$')} ${chalk.cyan('tascli')} ${chalk.bold('help')} to find a available command.
    `);
    },
};
