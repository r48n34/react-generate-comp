#!/usr/bin/env node
import { parseFlags } from "https://deno.land/x/cliffy@v0.25.7/flags/mod.ts";

import { useStateGen } from './utilis/useStateGenUtilis.ts';
import { generateFunctionComp } from './utilis/utili.ts';
import { activePromptOptions } from './utilis/promptGen/promptSelect.ts';
import { initTemplate } from './utilis/initTemplate/initTemplate.ts';

const  { flags } = parseFlags(Deno.args, {
    flags: [{
      name: "javascript",
      aliases: ["j", "javascript"],
      standalone: false,
    }, 
    {
      name: "generateComp",
      aliases: ["c", "comp"],
      standalone: false,
      type: "string",
    }, 
    {
      name: "generateRTKSlice",
      aliases: ["s", "slice"],
      standalone: false,
      type: "string",
    }, 
    {
      name: "generateUseState",
      aliases: ["u", "state"],
      standalone: false,
      type: "string",
    }, 
    {
      name: "init",
      aliases: ["i", "init"],
      standalone: true,
      type: "boolean",
    }, 
    ],
});

if (import.meta.main) {
    console.log(flags);
    main()
}

async function main(){
    console.log(`react-generate-comp`);
    const argv = flags

    const isTypescript = !argv.javascript;
    const compName = argv.generateComp;
    const sliceName = argv.generateRTKSlice;
    const useStateName = argv.generateUseState;
    const init = argv.init;
    
    if(!!compName && !!sliceName){
        return;
    }

    if(!!init){
        initTemplate();
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
}


// (async () => {


// })();
