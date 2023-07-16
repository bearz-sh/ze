import { YargsInstance,  Arguments } from '../sdk/cli/deps.ts'

export const command = 'test';

export const desc = 'This cmd description is ipsum';

export function builder(yargs: YargsInstance) {
    yargs.option('apps', {
        desc: 'List of apps to generate',
    });

    return yargs;
  // Add addt'l command configuration
}
  
export function handler(argv: Arguments) {
   console.log(argv);
  // Use parsed argv to perform any actions desired
}