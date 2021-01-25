import { green } from 'https://deno.land/std@0.83.0/fmt/colors.ts'

export const deleteLocalTask = (taskName, json, HOME) => {
    for (let i = 0; i < json.tasks.length; i++) {
        const task = json.tasks[i];

        if (task.name === taskName) {
            json.tasks.splice(i, 1)
        }
    }

    const data = JSON.stringify(json)

    // WRITE
    Deno.writeTextFileSync(`${HOME}/tascli.json`, data)
}
