// import * as handlebars  from 'npm:handlebars@4.7.7';
import { yargs, Arguments } from './sdk/cli/deps.ts';
import {capture } from './sdk/process/mod.ts'
import * as testCommand from './commands/test.ts';


await yargs(Deno.args)
    .command(testCommand)
    .command('$0', 'the default command', () => {}, (argv: Arguments) => {
        console.log(argv);
        console.log('this command will be run by default')
    })
    .help()
    .parseAsync();