#!/usr/bin/env node

import { Command } from 'commander';

import { useEffectGenUtils } from './utilis/useStateGenUtilis';
import { generateFunctionComp } from './utilis/utili';
import { activePromptOptions } from './utilis/promptGen/promptSelect';
import { initTemplate } from './utilis/initTemplate/initTemplate';
import { useStateGen } from './utilis/useEffectGenUtils';

const program = new Command();

program
    .name('react-generate-comp')
    .description('CLI to create react related items with best practices.')
    .version('2.0.0');

program
    .option('-j, --javascript', 'Output with javascript format')
    .option('-n, --native', 'Output with React Native format')
    .option('-c, --components [name...]', 'Generate components')
    .option('-u, --useState <name>', 'Generate useState')
    .option('-e, --useEffect', 'Generate useEffect')
    .option('-i, --init', 'Init pages or folders for react projects');

(() => {

    program.parse(process.argv)
    const options = program.opts();

    const isJavascript = options.hasOwnProperty('javascript') && options.javascript
    const isNative = options.native;

    const compNameList = options.components;
  
    const useStateName = options.useState;
    const useEffect = options.useEffect;
    const init = options.initTemplate;

    if (!!compNameList && !!useStateName) {
        return;
    }

    if (!!init) {
        initTemplate();
        return;
    }

    if (!!compNameList && Array.isArray(compNameList)) {
        for(let compName of compNameList){
            const newCompName = compName.trim();
            generateFunctionComp(!isJavascript, "Comp", newCompName, isNative);
        }

        return
    }

    if (!!useStateName) {
        useStateGen(useStateName);
        return
    }

    if (!!useEffect) {
        useEffectGenUtils();
        return
    }

    activePromptOptions()

})();