// ### DEPENDENCIES ###

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require('jsonfile');

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// REMOVE-FROM-ARRAY - remove an index from an array
const removeFromArray = require('@amphibian/remove-from-array');

const getTask = require('../helpers/getTask.js')

module.exports = {
  task: (JsonObject, PathToFile, argument) => {
    // REMOVE from array
    removeFromArray(getTask(JsonObject.tasks, argument), JsonObject.tasks);

    // WRITE to tascli.json
    jsonfile.writeFile(PathToFile, JsonObject, (err) => {
      console.log(`${chalk.green('✔')} task delete`);
      if (err) console.error(err);
    });
  },
};
