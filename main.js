#!/usr/bin/env node
// ### DEPENDENCIES ###

// FileSystem
const fs = require('fs');

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// OS
const os = require('os');

// ### VARIABLES ###

// Arguments
const argument = process.argv[2];

// JsonTemplate
const JsonTemplate = { tasks: [] };

// ###### JsonFile ######

// Path to tascli.json
const PathToFile = `${os.homedir()}/tascli.json`;

// CREATE tascli.json
if (argument === 'init') {
  const data = JSON.stringify(JsonTemplate, null, 4);
  fs.writeFileSync(PathToFile, data, 'utf8');
  console.log(`${chalk.green('✔')} created tascli.json in ${chalk.bold(os.homedir())}`);
  process.exit();
}

// CHECK exist tacli.json
if (fs.existsSync(PathToFile) === false) {
  console.log(`\n${chalk.bold('There isn’t a storage file')}\nUse ${chalk.green.bold('tacli init')} to create a starage file`);
  process.exit();
}

const JsonFile = require(PathToFile);

// ### LIB ###

// CREATE.js
const create = require('./commands/create.js');

// REMOVE.js
const remove = require('./commands/remove.js');

// MOVE.js
const move = require('./commands/move.js');

// LIST.js
const list = require('./commands/list.js');

// ###### other VARIABLES / OBJECTS ######

// JsonObject
const JsonObject = JsonFile;

// ### M ###
// ### A ###
// ### I ###
// ### N ###

if (argument === 'create') {
  create.task(JsonObject, PathToFile);
} else if (argument === 'remove') {
  remove.task(JsonObject, PathToFile);
} else if (argument === 'move') {
  move.task(JsonObject, PathToFile);
} else {
  list.task(JsonObject);
}
