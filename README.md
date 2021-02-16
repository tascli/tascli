![Node.js Package](https://github.com/tascli/tascli/workflows/Node.js%20Package/badge.svg) ![Build linux](https://github.com/tascli/tascli/workflows/Build%20Linux/badge.svg) ![Build windows](https://github.com/tascli/tascli/workflows/Build%20Windows/badge.svg)

# TasCLI

![](https://github.com/tascli/tascli/raw/master/images/tascli.png)

## Description
Tascli is an open-source task-manager like [monday.com](https://www.monday.com), but for command line lovers.

## Install

### Classic:

#### Windows:

1. Download the [tascli.exe](https://github.com/tascli/tascli/raw/master/dist/tascli.exe) and drag it where ever you like
2. Open the cmd and type: setx PATH "PATH TO YOUR DOWNLOADED .EXE"
3. Done 😀

#### Linux:

1. Download tascli and drag it where ever you like
2. Open the terminal and type: echo 'export PATH="PATH TO YOUR DOWNLOADED FILE"' >> ~/.bashrc
3. Done 😎


### Node.js

You need to have installed [nodejs](https://nodejs.org) to run tascli

Using [npm](https://www.npmjs.org) / [yarn](https://yarnpkg.com/):

`npm install -g tascli` or `yarn global add tascli`

## Documentation

`tascli` - list all tasks

`tascli create <name>` - create a task
    
  `tascli create <name> -q/--quick` - create a task only with his name

`tascli info <name>` - get more info about a task

`tascli remove <name>` - delete a task

`tascli set <name>` - set the status of a task

`tascli init` - create an empty json-file to store your tasks

### Create a new user

On Windows:

1. open `C:\users\[USER]\tascli.json`
2. You can write them in the bracket behind users

On Linux:

1. open `/home/[USER]/tascli.json`
2. You can write them in the bracket behind users

## 👏 Thanks to
[chalk](https://www.npmjs.com/package/chalk), [jsonfile](https://www.npmjs.com/package/jsonfile), [prompts](https://www.npmjs.com/package/prompts), [removeFromArray](https://www.npmjs.com/package/@amphibian/remove-from-array), [cliui](https://www.npmjs.com/package/cliui), [boxen](https://www.npmjs.com/package/boxen)
