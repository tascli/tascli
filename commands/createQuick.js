// ### DEPENDENCIES ###

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require('jsonfile');

// ### VARIABLES ###

let TaskTemplate = {
  name:'',
  description:'',
  user:'',
  date:'',
  priority:'',
  star:false,
  status:'planned'
}
// ### M ###
// ### A ###
// ### I ###
// ### N ###

module.exports = {
  task: (JsonObject, PathToFile, Arguments) => {

    if (Arguments[3] === '--quick' || Arguments[3] === '-q') {
        TaskTemplate.name = Arguments[4];
    } else {
        TaskTemplate.name = Arguments[3]
    }
    
    TaskTemplate.description = '';
    TaskTemplate.user = '';
    TaskTemplate.date = '';
    TaskTemplate.priority = 'medium';
    
    // ADD to array
    JsonObject.tasks.unshift(TaskTemplate);

    console.log(`${chalk.green('✔')} Task called ${chalk.bold(TaskTemplate.name)} successful created.`);

    // WRITE to tascli.json
    jsonfile.writeFileSync(PathToFile, JsonObject, (err) => {
    if (err) console.error(err);
    });
  },
};
