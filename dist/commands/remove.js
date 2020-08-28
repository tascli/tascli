"use strict";
// ### DEPENDENCIES ###
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// JSONFILE - Easily read/write JSON files in Node.js.
const jsonfile = require("jsonfile");
// PROMPTS - ❯ Lightweight, beautiful and user-friendly interactive prompts
const prompts = require("prompts");
// REMOVE-FROM-ARRAY - remove an index from an array
const removeFromArray = require("@amphibian/remove-from-array");
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
        (() => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield prompts(question);
            // REMOVE from array
            removeFromArray(JsonObject.tasks[response.TaskRemove], JsonObject.tasks);
            // WRITE to tascli.json
            jsonfile.writeFile(PathToFile, JsonObject, (err) => {
                if (err)
                    console.error(err);
            });
        }))();
    },
};
