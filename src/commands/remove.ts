// ### DEPENDENCIES ###

// JSONFILE - Easily read/write JSON files in Node.js.
import jsonfile = require('jsonfile');

// PROMPTS - ❯ Lightweight, beautiful and user-friendly interactive prompts
import prompts = require('prompts');

// REMOVE-FROM-ARRAY - remove an index from an array
import removeFromArray = require('@amphibian/remove-from-array');

module.exports = {
  task: (JsonObject:any, PathToFile:string) => {
    const TaskList:string[] = [];

    // TASKS as array
    for (let i = 0; i < JsonObject.tasks.length; i += 1) {
      TaskList.push(JsonObject.tasks[i].name);
    }

    // DEFINED the prompt
    const question:any = {
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
