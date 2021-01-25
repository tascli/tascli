// COLORS
import { red, bold, yellow, cyan } from 'https://deno.land/std@0.83.0/fmt/colors.ts'

export const infoLocalTask = async (taskName, json) => {
    for (let i = 0; i < json.tasks.length; i++) {
        const task = json.tasks[i]
        let taskFavourite = ''
        if (task.name === taskName) {
            if (task.favourite) {
                taskFavourite = yellow('★')    
            } else if (!task.favourite) {
                taskFavourite = " "
            }


            console.log(`${bold(cyan(task.name))} ${taskFavourite}`)
            console.log(`   ${bold('Description:')} ${task.description}`)
            console.log(`   ${bold('Date:')} ${task.date}`)
            console.log(`   ${bold('Finished:')} ${task.finished}`)
            Deno.exit(200)
        }
    }

    console.log(`${red('404')} - not found`)
    Deno.exit(404)
}