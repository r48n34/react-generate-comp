#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { generateFunctionComp } from './utilis/utili';

const parser = yargs(process.argv.slice(2)).options({
    t: {
        type: 'boolean',
        describe: 'Enable typescript mode',
        default: false,
        alias: 'typescript',
    },
    c: {
        type: 'string',
        describe: 'Generate comp name',
        alias: 'generateComp',
    },
});

(async () => {
    console.log(`react-generate-comp 1.0.5`);
    const argv = await parser.argv;

    const compName = argv.c;
    const isTypescript = argv.t;

    if (!!compName) {
        generateFunctionComp(isTypescript, compName);
    }
})();
