// COLORS
import { green, gray, yellow } from 'https://deno.land/std@0.83.0/fmt/colors.ts'

export const listLocalTasks = (task, json) => {
    if (json.tasks.length === 0) {
        console.log('\n   🏝️  It´s time to chill\n')
    }

    for (let i = 0; i < json.tasks.length; i++) {
        const task = json.tasks[i];
        let taskFinished = null
        let taskFavourite = null
        
        if (task.finished) {
            taskFinished = green('✔')    
        } else if (!task.finished) {
            taskFinished = " "
        }

        if (task.favourite) {
            taskFavourite = yellow('★')    
        } else if (!task.favourite) {
            taskFavourite = " "
        }

        console.log(`(${taskFinished}) ${task.name} ${gray(task.description)} ${taskFavourite}`)
    }
}