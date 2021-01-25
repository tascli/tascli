import { bold, underline } from 'https://deno.land/std@0.83.0/fmt/colors.ts'

const help = () => {
    console.log(`
Available commands:

  Tasks:
    ${bold('tascli task create')} - create new task
    ${bold('tascli task delete')} - delete a task
    ${bold('tascli task edit')} - edit the parameters of a task

  Users:
    ${bold('tascli user create')} - create new task
    ${bold('tascli user delete')} - delete a task
    ${bold('tascli user edit')} - edit the parameters of a task
    `)

    Deno.exit(200)
}

export default help