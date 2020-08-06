// ### DEPENDENCIES ###

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require('jsonfile');

// PROMPTS - ❯ Lightweight, beautiful and user-friendly interactive prompts
const prompts = require('prompts');

// REMOVE-FROM-ARRAY - remove an index from an array
const removeFromArray = require('@amphibian/remove-from-array');

module.exports = {
  task: (JsonObject, PathToFile) => {
    const TaskList = [];

    // TASKS as array
    for (let i = 0; i < JsonObject.tasks.length; i += 1) {
      TaskList.push(JsonObject.tasks[i].name);
    }

    // DEFINED the prompt
    const question = {
      type: 'select',
      name: 'TaskRemove',
      message: 'What you wish to remove from your list?',
      choices: TaskList,
    };

    // START the prompt
    (async () => {
      const response = await prompts(question);

      // REMOVE from array
      removeFromArray(JsonObject.tasks[response.TaskRemove], JsonObject.tasks);

      // WRITE to tascli.json
      jsonfile.writeFile(PathToFile, JsonObject, (err) => {
        if (err) console.error(err);
      });
    })();
  },
};
