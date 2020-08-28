// ### DEPENDENCIES ###

/** CHALK - Terminal string styling done right */
import chalk = require('chalk');

// ### HELPERS ###

/** Get task by name */
const getTask = require('./getTask.js')

module.exports = (array:any, name:string) => {
    const task:any = getTask(array, name);

    if (task.status === 'planned') {
        return chalk.cyan.bold(task.name)
    } else if (task.status === 'in-progress') {
        return chalk.yellow.bold(task.name)
    } else if (task.status === 'done') {
        return chalk.green.bold(task.name)
    }
}