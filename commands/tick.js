export const tickLocalTask = (taskName, json, HOME) => {
    for (let i = 0; i < json.tasks.length; i++) {
        const task = json.tasks[i];
        
        if (task.name === taskName) {
            task.finished = true
        }

        const data = JSON.stringify(json)

        // WRITE
        Deno.writeTextFileSync(`${HOME}/tascli.json`, data)
    }
}