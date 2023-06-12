#!/usr/bin/env node
import {
  parseFlags,
  ValidationError,
} from "https://deno.land/x/cliffy@v0.25.7/flags/mod.ts";

import { useStateGen } from "./utilis/useStateGenUtilis.ts";
import { generateFunctionComp } from "./utilis/utili.ts";
import { activePromptOptions } from "./utilis/promptGen/promptSelect.ts";
import { initTemplate } from "./utilis/initTemplate/initTemplate.ts";

if (import.meta.main) {
  main();
}

async function main() {
    try {
        const { flags } = parseFlags(Deno.args, {
            flags: [
                {
                    name: "javascript",
                    type: "boolean",
                    aliases: ["j", "js", "javascript"],
                    standalone: false,
                },
                {
                    name: "generateComp",
                    aliases: ["c", "comp", "compnents"],
                    standalone: false,
                    type: "string",
                    collect: true,
                },
                {
                    name: "generateRTKSlice",
                    aliases: ["s", "slice", "rtk"],
                    standalone: false,
                    type: "string",
                    collect: true,
                },
                {
                    name: "generateUseState",
                    aliases: ["u", "state", "useState"],
                    standalone: false,
                    type: "string",
                },
                {
                    name: "init",
                    aliases: ["i", "init"],
                    standalone: true,
                    type: "boolean",
                }
            ],
        });

        const isTypescript:boolean = !flags.javascript;
        const compName: string[] = flags.generateComp;
        const sliceName: string = flags.generateRTKSlice;
        const useStateName: string = flags.generateUseState;
        const init:boolean = flags.init;

        if (!!compName && !!sliceName) {
            return;
        }

        if (!!init) {
            await initTemplate();
            return;
        }

        if (!!compName && compName.length >= 1) {
            for(let v of compName){
                await generateFunctionComp(
                    isTypescript,
                    "Comp",
                    v.trim().split(" ").join(""),
                )
            }
            return;
        }

        if (!!sliceName) {
            for(let v of sliceName){
                await generateFunctionComp(
                    isTypescript,
                    "Slice",
                    v.trim().split(" ").join(""),
                );
            }
            return;
        }

        if (!!useStateName) {
            await useStateGen(useStateName);
            return;
        }

        console.log(`react-generate-comp`);
        await activePromptOptions();
    } 
    catch (error) {
        if (error instanceof ValidationError) {
            console.log("[VALIDATION_ERROR] %s", error.message);
            Deno.exit(1);
        }

        throw error;
    }
}

// deno install -n rgc -A -f .\index.ts
