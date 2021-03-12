// ### DEPENDENCIES ###

// PROMPTS - ❯ Lightweight, beautiful and user-friendly interactive prompts
const prompts = require('prompts');

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require('jsonfile');

// CHALK - Terminal string styling done right
const chalk = require('chalk');

const getTask = require('../helpers/getTask.js');

// ### M ###
// ### A ###
// ### I ###
// ### N ###

module.exports = {
  task: (JsonObject, PathToFile, Argument) => {
    // DEFINED the prompt
    const question = {
      type: 'select',
      name: 'TaskStatus',
      message: 'What is the new status for this item?',
      choices: [
        { title: chalk.green('done'), value: 'done' },
        { title: chalk.yellow('in progress'), value: 'in-progress' },
        { title: chalk.cyan('planned'), value: 'planned' },
      ],
    };

    // START the prompt
    (async () => {
      const response = await prompts(question);

      getTask(JsonObject.tasks, Argument).status = response.TaskStatus;

      // WRITE to tascli.json
      jsonfile.writeFile(PathToFile, JsonObject, (err) => {
        if (err) console.error(err);
      });
    })();
  },
};
