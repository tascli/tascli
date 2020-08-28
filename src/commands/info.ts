// ### DEPENDENCIES ###

/** CHALK - Terminal string styling done right */
import chalk = require('chalk');

// ### HELPERS ###

/** Get task by name */
const getTask = require('../helpers/getTask.js')

/** Set color by status */
const colorByStatus = require('../helpers/colorByStatus.js')

module.exports = (JsonObject:any, Argument:string) => {
    console.log( `
${colorByStatus(JsonObject.tasks, Argument)}  ${chalk.gray(getTask(JsonObject.tasks, Argument).user)}  ${(getTask(JsonObject.tasks, Argument).star ? chalk.yellow('★') : chalk.gray('★'))}

${chalk.bold('date:')} ${chalk.italic(getTask(JsonObject.tasks, Argument).date)} 
${chalk.bold('description:')} ${chalk.italic(getTask(JsonObject.tasks, Argument).description)}
    `)
};