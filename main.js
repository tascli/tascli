#!/usr/bin/env node
// ### DEPENDENCIES ###

// FileSystem
const fs = require('fs');

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// OS
const os = require('os');

// UPDATE-NOTIFIER - Update notifications for your CLI app
const updateNotifier = require('update-notifier');

// ### VARIABLES ###

// Arguments
const Arguments = process.argv;

// JsonTemplate
const JsonTemplate = { tasks: [], users:[] };

const pkg = require('./package.json');

// CHECK for update
updateNotifier({pkg, updateCheckInterval: 0}).notify();

// ###### JsonFile ######

// Path to tascli.json
const PathToFile = `${os.homedir()}/tascli.json`;

// CREATE tascli.json
if (Arguments[2] === 'init') {
  const data = JSON.stringify(JsonTemplate, null, 4);
  fs.writeFileSync(PathToFile, data, 'utf8');
  console.log(`${chalk.green('✔')} created tascli.json in ${chalk.bold(os.homedir())}`);
  process.exit();
}

// CHECK exist tacli.json
if (fs.existsSync(PathToFile) === false) {
  console.log(`\n${chalk.bold('There isn’t a storage file')}\nUse ${chalk.gray('$')} ${chalk.green.bold('tacli init')} to create a starage file`);
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

// HELP.js
const help = require('./commands/help.js');

// ERROR.js
const error = require('./commands/error.js');

// USER.js
const user = require('./commands/user.js');
// ###### other VARIABLES / OBJECTS ######

// JsonObject
const JsonObject = JsonFile;

if (Arguments[2] === undefined || Arguments[2] === 'help' || Arguments[2] === 'user') {
  
} else {

  if (Arguments[3] === undefined) {
    error.WhereAreArgument();
    process.exit()
  }
}

// ### M ###
// ### A ###
// ### I ###
// ### N ###


if  (Arguments[2] === 'create') {
  create.task(JsonObject, PathToFile, Arguments[3])
} else if  (Arguments[2] === 'remove') {
  remove.task(JsonObject, PathToFile, Arguments[3]);
} else if  (Arguments[2] === 'set') {
  move.task(JsonObject, PathToFile, Arguments[3]);
} else if  (Arguments[2] === 'info') {
  info(JsonObject, Arguments[3]);
} else if (Arguments[2] === 'user') {
  user(JsonObject, PathToFile)
} else if  (Arguments[2] === 'help') {
  help();
} else if  (Arguments[2] === undefined) {
  if (JsonObject.tasks.length > 0) {
    list.task(JsonObject);
  } else {
    console.log(chalk.bold('\n✔  time to chill\n'));
  }
} else {
  error.BadArgument();
}