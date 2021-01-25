// COLORS
import { bold, green, gray } from 'https://deno.land/std@0.83.0/fmt/colors.ts'

//JSON
import { writeJson } from 'https://deno.land/x/jsonfile/mod.ts';

export const createLocalTask = async (name, json, HOME) => {
    const description = prompt(`${green(bold('?'))} Please give your task a description:`)
    const date = prompt(`${green(bold('?'))} When should this task finish:`)
    const favourite = prompt(`${green(bold('?'))} Is this task your favourite? ${gray('(yes / no)')}`)
    
    const task = {
        name: name,
        description: description,
        date: date,
        favourite: favourite,
        finish: false
    }

    if (!task.name) {
        task.name = 'my Task'
    }

    json.tasks.push(task)

    const data = JSON.stringify(json)

    // WRITE
    Deno.writeTextFileSync(`${HOME}/tascli.json`, data)


    Deno.exit(200)
}