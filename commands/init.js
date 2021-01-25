import { bold } from 'https://deno.land/std@0.83.0/fmt/colors.ts'

const encoder = new TextEncoder();

const HOME = Deno.env.get('HOME')
const jsonData = encoder.encode('{"tasks":[], "users":[]}');

const initJson = async () => {
    await Deno.writeFile(`${HOME}/tascli.json`, jsonData)

    console.log(`File successful created in ${bold(HOME)}`)

    Deno.exit(200)
}

export default initJson;