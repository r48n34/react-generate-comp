import prompts from 'prompts';
import { lightYellow, blue, cyan, yellow, green } from 'kolorist'
import { rawGen } from "./rawGen";
import { rtkGen } from './rtkGen';
import { zustandGen } from './zustandGen';

interface PromptReturnObj {
    type: "raw" | "rtk"
    lang: "ts" | "js"
}

export async function initTemplate(){

    try {
        
        const questions = [
            {
                type: 'select',
                name: 'type',
                message: 'Select a template to generate',
                choices: [
                  { title: lightYellow("Raw"), value: "raw" },
                  { title: cyan("RTK react"), value: "rtk" },
                  { title: green("zustand"), value: "zustand" },
                ],
            },
            {
                type: 'select',
                name: 'lang',
                message: 'Select a languages',
                choices: [
                  { title: blue("Typescript"), value: "ts" },
                  { title: yellow("Javascript"), value: "js" },
                ],
            }
        ] as any
    
        const resPrompt: PromptReturnObj = await prompts(
            questions, 
            { 
                onCancel: () => { throw new Error("Prompt stopped") }
            }
        );

        const isTypescript = resPrompt.lang === "ts";

        if(resPrompt.type === "raw"){
            rawGen(isTypescript);
        }
        else if(resPrompt.type === "rtk"){
            rtkGen(isTypescript);
        }
        else if(resPrompt.type === "zustand"){
            zustandGen(isTypescript);
        }

        console.log(
            cyan("\nDone! Enjoy your new project :)")
        );
        
    } 
    catch (error) {
        return
    }

}