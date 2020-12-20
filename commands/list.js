// ### DEPENDENCiES ###

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// ### M ###
// ### A ###
// ### i ###
// ### N ###

module.exports = {
  task: (JsonObject) => {
    // Planned
    const planned = [];

    // InProgress
    const inProgress = [];

    // Done
    const done = [];

    for (let i = 0; i < JsonObject.tasks.length; i += 1) {
      if (JsonObject.tasks[i].status === 'planned') {
        planned.push(`${JsonObject.tasks[i].name}  ${chalk.gray(JsonObject.tasks[i].user)} ${(JsonObject.tasks[i].star ? chalk.yellow('★') : '')}`);
      } else if (JsonObject.tasks[i].status === 'in-progress') {
        inProgress.push(`${JsonObject.tasks[i].name}  ${chalk.gray(JsonObject.tasks[i].user)} ${(JsonObject.tasks[i].star ? chalk.yellow('★') : '')}`);
      } else if (JsonObject.tasks[i].status === 'done') {
        done.push(`${JsonObject.tasks[i].name}  ${chalk.gray(JsonObject.tasks[i].user)} ${(JsonObject.tasks[i].star ? chalk.yellow('★') : '')}`);
      }
    }

    // Planned
    console.log(chalk.cyan.bold('\nplanned:'), chalk.gray(`[${planned.length}]`));
    for (let i = 0; i < planned.length; i += 1) {
      let plannedIndex = i;
      plannedIndex += 1;
      console.log(`   ${chalk.gray(`${plannedIndex}.`)} ${planned[i]}`);
    }

    // InProgress
    console.log(chalk.yellow.bold('\nin progress:'), chalk.gray(`[${inProgress.length}]`));
    for (let i = 0; i < inProgress.length; i += 1) {
      let inProgressIndex = i;
      inProgressIndex += 1;
      console.log(`   ${chalk.gray(`${inProgressIndex}.`)} ${inProgress[i]}`);
    }

    // done
    console.log(chalk.green.bold('\ndone:'), chalk.gray(`[${done.length}]`));
    for (let i = 0; i < done.length; i += 1) {
      let doneIndex = i;
      doneIndex += 1;
      console.log(`   ${chalk.gray(`${doneIndex}.`)} ${done[i]}`);
    }
  },
};
