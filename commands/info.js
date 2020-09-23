// ### DEPENDENCIES ###

/** CHALK - Terminal string styling done right */
const chalk = require('chalk');

// ### HELPERS ###

/** Get task by name */
const getTask = require('../helpers/getTask.js')

/** Set color by status */
const colorByStatus = require('../helpers/colorByStatus.js')

module.exports = (JsonObject, Argument) => {
    console.log( `
${colorByStatus(JsonObject.tasks, Argument)}  ${chalk.gray(getTask(JsonObject.tasks, Argument).user)}  ${(getTask(JsonObject.tasks, Argument).star ? chalk.yellow('★') : chalk.gray('★'))}

${chalk.bold('date:')} ${chalk.italic(getTask(JsonObject.tasks, Argument).date)} 
${chalk.bold('description:')} ${chalk.italic(getTask(JsonObject.tasks, Argument).description)}
${chalk.bold('user:')} ${chalk.italic(getTask(JsonObject.tasks, Argument).user)}
    `)
};