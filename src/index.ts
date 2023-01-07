#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { useStateGen } from './utilis/useStateGenUtilis';
import { generateFunctionComp } from './utilis/utili';
import { activePromptOptions } from './utilis/promptGen/promptSelect';

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
    u: {
        type: 'string',
        describe: 'Generate useState line to your clipboard',
        alias: 'generateUseState',
    },
});

(async () => {
    console.log(`react-generate-comp`);
    const argv = await parser.argv;

    const isTypescript = argv.t;
    const compName = argv.c;
    const sliceName = argv.s;
    const useStateName = argv.u;

    console.log(argv);
    
    if(!!compName && !!sliceName){
        return;
    }

    if (!!compName) {
        generateFunctionComp(isTypescript, "Comp", compName.trim().split(' ').join(''));
        return
    }

    if(!!sliceName){
        generateFunctionComp(isTypescript, "Slice", sliceName.trim().split(' ').join(''));
        return
    }

    if(!!useStateName){
        useStateGen(useStateName);
        return
    }

    await activePromptOptions()

})();
