// ### DEPENDENCIES ###

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require('jsonfile');

// PROMPTS - ❯ Lightweight, beautiful and user-friendly interactive prompts
const prompts = require('prompts');

// ### VARIABLES ###

let TaskTemplate = {
  name: '',
  description: '',
  user: '',
  date: '',
  priority: '',
  star: false,
  status: 'planned',
};
// ### M ###
// ### A ###
// ### I ###
// ### N ###

module.exports = {
  task: (JsonObject, PathToFile, Argument) => {
    // DEFINED the prompt
    const users = [];
    for (let i = 0; i < JsonObject.users.length; i += 1) {
      users.push({ title: JsonObject.users[i] });
    }

    const questions = [
      /* Description */ {
        name: 'description',
        message: 'And the description?',
        type: 'text',
      }, /* Owner */ {
        type: 'autocomplete',
        name: 'user',
        message: 'Who is the owner of this task?',
        choices: users,
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
      }, /* Favorite */ {
        type: 'toggle',
        name: 'star',
        message: 'Set this item as favorit task',
        initial: true,
        active: '★',
        inactive: 'no',
      },
    ];

    // START the prompt
    (async () => {
      const response = await prompts(questions);

      TaskTemplate.name = Argument;
      TaskTemplate.description = response.description;
      TaskTemplate.user = response.user;
      TaskTemplate.date = response.date;
      TaskTemplate.priority = response.priority;
      TaskTemplate.star = response.star;

      // ADD to array
      JsonObject.tasks.unshift(TaskTemplate);

      // WRITE to tascli.json
      jsonfile.writeFile(PathToFile, JsonObject, (err) => {
        if (err) console.error(err);
      });
    })();
  },
};
