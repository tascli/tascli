// COLORS
import { bold } from 'https://deno.land/std@0.83.0/fmt/colors.ts'

// JSON
import loadJsonFile from 'https://deno.land/x/load_json_file@v1.0.0/mod.ts'

// INIT
import initJson from './commands/init.js'

// HELP
import help from './commands/help.js'

// CREATE
import { createLocalTask } from './commands/create.js'

// LIST
import { listLocalTasks } from './commands/list.js'

// TICK
import { tickLocalTask } from './commands/tick.js'

// INFO
import { infoLocalTask } from './commands/info.js'

// DELETE
import { deleteLocalTask } from './commands/delete.js'

// ENV
const HOME = Deno.env.get('HOME')

// ARGUMENTS
const command = Deno.args[0]
const subCommand = Deno.args[1]
const args = Deno.args

// JSON
let json = {}

if (command === 'init') {
    await initJson()
}


// LOAD JSON
try {
    json = await loadJsonFile(`${HOME}/tascli.json`)
} catch (error) {
    console.log(`There is no valid JSON in "${HOME}". Please use ${bold(`tascli init`)} to create them.`)
    Deno.exit(400)
}

// PARSE ARGUMENTS
if (command === 'help') {
    help()
} else if (command === 'task') {
    if (subCommand === 'create') {
        await createLocalTask(args[2], json, HOME)
    }
    else if (subCommand === 'list') {
        listLocalTasks(args[2], json)
    }
    else if (subCommand === 'tick') {
        tickLocalTask(args[2], json, HOME)
    }
    else if (subCommand === 'info') {
        infoLocalTask(args[2], json)
    }
    else if (subCommand === 'delete') {
        deleteLocalTask(args[2], json, HOME)
    }
} else if (command === 'tasks') {
    if (subCommand === 'list') {
        listLocalTasks(args[2], json)
    }
}
