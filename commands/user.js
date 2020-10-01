// ### DEPENDENCIES ###

// CHALK - Terminal string styling done right
const chalk = require('chalk');

// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require('jsonfile');

// PROMPTS - ❯ Lightweight, beautiful and user-friendly interactive prompts
const prompts = require('prompts')

// ### M ###
// ### A ###
// ### I ###
// ### N ###

module.exports = async (JsonObject, PathToFile) => {
    
    // DEFINED the prompt
    let users = []
    for (let i = 0; i < JsonObject.users.length; i++) {
        users.push({title: JsonObject.users[i]})
        
    }

    const questions = {
        name: 'userName',
        message: 'Who is the user???',
        type: 'text',
    }

    const response = await prompts(questions);
    
    // ADD to array
    JsonObject.users.unshift(response.userName);

    // WRITE to tascli.json
    jsonfile.writeFile(PathToFile, JsonObject, (err) => {
    if (err) console.error(err);
    });
};
