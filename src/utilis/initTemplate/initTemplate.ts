import prompts from 'prompts';
import { lightYellow, blue, cyan, yellow } from 'kolorist'
import { rawGen } from "./rawGen";
import { rtkGen } from './rtkGen';

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

        console.log(
            cyan("\nDone! Enjoy your new project :)")
        );
        
    } 
    catch (error) {
        return
    }

}