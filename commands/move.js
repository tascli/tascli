// ### DEPENDENCIES ###

// PROMPTS - ❯ Lightweight, beautiful and user-friendly interactive prompts
const prompts = require('prompts');

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require('jsonfile');

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// ### M ###
// ### A ###
// ### I ###
// ### N ###

module.exports = {
  task: (JsonObject, PathToFile) => {
    const TaskList = [];

    // TASKS as array
    for (let i = 0; i < JsonObject.tasks.length; i += 1) {
      TaskList.push(JsonObject.tasks[i].name);
    }

    // DEFINED the prompt
    const question = [
      {
        type: 'select',
        name: 'TaskMove',
        message: 'From which item do you want to change the status?',
        choices: TaskList,
      }, {
        type: 'select',
        name: 'TaskStatus',
        message: 'What is the new status for this item?',
        choices: [
          { title: chalk.green('done'), value: 'done' },
          { title: chalk.yellow('in progress'), value: 'in-progress' },
          { title: chalk.cyan('planned'), value: 'planned' },
        ],
      },
    ];

    // START the prompt
    (async () => {
      const response = await prompts(question);

      JsonObject.tasks[response.TaskMove].status = response.TaskStatus;

      // WRITE to tascli.json
      jsonfile.writeFile(PathToFile, JsonObject, (err) => {
        if (err) console.error(err);
      });
    })();
  },
};
