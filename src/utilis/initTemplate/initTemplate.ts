import { Select, prompt } from "https://deno.land/x/cliffy@v0.25.7/prompt/mod.ts";

import { rawGen } from "./rawGen.ts";
import { rtkGen } from './rtkGen.ts';
import { zustandGen } from './zustandGen.ts';

import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts";

export async function initTemplate(){

    try {
        
        const questions = await prompt([
            {
                type: Select,
                name: "type",
                message: "Select a template to generate",
                options: [
                    { name: colors.bold.yellow("Raw"), value: "raw" },
                    { name: colors.bold.cyan("RTK react"), value: "rtk" },
                    { name: colors.bold.green("zustand"), value: "zustand" },
                ],
            },
            {
                type: Select,
                name: 'lang',
                message: 'Select a languages',
                options: [
                  { name: colors.bold.blue("Typescript"), value: "ts" },
                  { name: colors.bold.yellow("Javascript"), value: "js" },
                ],
            }
        ]);

        const isTypescript = questions.lang === "ts";

        if(questions.type === "raw"){
            rawGen(isTypescript);
        }
        else if(questions.type === "rtk"){
            rtkGen(isTypescript);
        }
        else if(questions.type === "zustand"){
            zustandGen(isTypescript);
        }

        console.log(
            colors.bold.cyan("\nDone! Enjoy your new project :)")
        );
        
    } 
    catch (error) {
        return
    }

}