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
    s: {
        type: 'string',
        describe: 'Generate RTK slice',
        alias: 'generateRTKSlice',
    },
});

(async () => {
    console.log(`react-generate-comp`);
    const argv = await parser.argv;

    const isTypescript = argv.t;
    const compName = argv.c;
    const sliceName = argv.s;

    if(!!compName && !!sliceName){
        return;
    }

    if (!!compName) {
        generateFunctionComp(isTypescript, "Comp" ,compName.trim().split(' ').join(''));
    }

    if(!!sliceName){
        generateFunctionComp(isTypescript, "Slice" ,sliceName.trim().split(' ').join(''));
    }

})();
