// ### DEPENDENCIES ###

/** CHALK - Terminal string styling done right */
const chalk = require('chalk');

// ### HELPERS ###

/** Get task by name */
const getTask = require('./getTask.js');

module.exports = (array, name) => {
  const task = getTask(array, name);

  if (task.status === 'planned') {
    return chalk.cyan.bold(task.name);
  } if (task.status === 'in-progress') {
    return chalk.yellow.bold(task.name);
  } if (task.status === 'done') {
    return chalk.green.bold(task.name);
  }
};
