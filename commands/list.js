// ### DEPENDENCIES ###

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// BOXEN - Create boxes in the terminal
const boxen = require('boxen');

// CLIUI - Easily create complex multi-column command-line-interfaces.
const ui = require('cliui')();

// ### M ###
// ### A ###
// ### I ###
// ### N ###

module.exports = {
  task: (JsonObject) => {
    // CHECK if there content
    if (JsonObject.tasks.length === 0) {
      console.log(chalk.bold('\nTime to chill'));
      process.exit();
    }

    // TASKS as array

    // NAMES
    let name = '';
    for (let i = 0; i < JsonObject.tasks.length; i += 1) {
      name = `${name + JsonObject.tasks[i].name}\n`;
    }

    // STATUS
    let status = '';
    let statusDone = 0;
    let statusInProgress = 0;
    let statusPlanned = 0;
    for (let i = 0; i < JsonObject.tasks.length; i += 1) {
      if (JsonObject.tasks[i].status === 'done') {
        status = `${status + chalk.green('done')}\n`;
        statusDone += 1;
      } else if (JsonObject.tasks[i].status === 'in-progress') {
        status = `${status + chalk.yellow('in progress')}\n`;
        statusInProgress += 1;
      } else if (JsonObject.tasks[i].status === 'planned') {
        status = `${status + chalk.cyan('planned')}\n`;
        statusPlanned += 1;
      }
    }

    // DESCRIPTION
    let description = '';
    for (let i = 0; i < JsonObject.tasks.length; i += 1) {
      description = `${description + JsonObject.tasks[i].description}\n`;
    }

    // DATE
    let date = '';
    for (let i = 0; i < JsonObject.tasks.length; i += 1) {
      date = `${date + JsonObject.tasks[i].date}\n`;
    }

    // PRIORITY
    let priority = '';
    for (let i = 0; i < JsonObject.tasks.length; i += 1) {
      if (JsonObject.tasks[i].priority === 'low') {
        priority = `${priority + chalk.green('low')}\n`;
      } else if (JsonObject.tasks[i].priority === 'medium') {
        priority = `${priority + chalk.yellow('medium')}\n`;
      } else if (JsonObject.tasks[i].priority === 'heigh') {
        priority = `${priority + chalk.red('heigh')}\n`;
      }
    }

    // DEFINED the output
    ui.div({
      text: chalk.bold.cyan.underline(name),
      width: 20,
    }, {
      text: status,
      width: 20,
    }, {
      text: chalk.gray(description),
      width: 40,
    }, {
      text: date,
      width: 20,
    }, {
      text: priority,
    });

    // PRINT
    console.log(boxen(ui.toString(), {
      padding: 1, margin: 1, borderStyle: 'round', borderColor: 'gray',
    }));
    console.log(`   ${chalk.green(statusDone)} ${chalk.gray('done')}   ${chalk.yellow(statusInProgress)} ${chalk.gray('in progress')}   ${chalk.cyan(statusPlanned)} ${chalk.gray('planned')}\n`);
  },
};
