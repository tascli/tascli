// ### DEPENDENCIES ###

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require('jsonfile');

// PROMPTS - ❯ Lightweight, beautiful and user-friendly interactive prompts
const prompts = require('prompts');

// ### VARIABLES ###

const TaskTemplate = {
  name: '',
  description: '',
  date: '',
  priority: '',
};

// ### M ###
// ### A ###
// ### I ###
// ### N ###

module.exports = {
  task: (JsonObject, PathToFile) => {
    // DEFINED the prompt
    const questions = [

      // Name
      {
        name: 'name',
        message: 'Whats the name of the new item?',
        type: 'text',
      }, /* Description */ {
        name: 'description',
        message: 'And the description?',
        type: 'text',
      }, /* Date */ {
        type: 'text',
        name: 'date',
        message: 'Pick a date',
      }, /* Priority */ {
        type: 'select',
        name: 'priority',
        message: 'What is the priority of the task?',
        choices: [
          { title: chalk.red('heigh'), value: 'heigh' },
          { title: chalk.yellow('medium'), value: 'medium' },
          { title: chalk.green('low'), value: 'low' },
        ],
      },
    ];

    // START the prompt
    (async () => {
      const response = await prompts(questions);

      // SET all properties
      TaskTemplate.name = response.name;
      TaskTemplate.status = 'planned';
      TaskTemplate.description = response.description;
      TaskTemplate.date = response.date;
      TaskTemplate.priority = response.priority;

      // ADD to array
      JsonObject.tasks.unshift(TaskTemplate);

      // WRITE to tascli.json
      jsonfile.writeFile(PathToFile, JsonObject, (err) => {
        if (err) console.error(err);
      });
    })();
  },
};
