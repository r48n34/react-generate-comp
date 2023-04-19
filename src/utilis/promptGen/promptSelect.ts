import prompts from 'prompts';
import path from "path"
import { blue, cyan, lightGreen, yellow } from 'kolorist'
import { generateFunctionComp } from '../utili';

interface PromptReturnObj {
    fileName: string
    type: "Comp" | "Slice"
    lang: string
}

export async function activePromptOptions(){

    const questions = [
        {
            type: 'select',
            name: 'type',
            message: 'Select a type to generate',
            choices: [
              { title: cyan("Components"), value: "Comp" },
              { title: lightGreen("RTK Slice"), value: "Slice" },
            ],
        },
        {
          type: 'text',
          name: 'fileName',
          initial: "users",
          message: 'What is your file name?',
          validate: (v:string | null) => {

            if(!v || v !== path.basename(v)){
                return "Missing file name or invalid file name"
            }

            if(v.endsWith(".")){
                return "Dot(.) can not be named at last"
            }

            return true
          }
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
    ] as any;

    try {
        const res: PromptReturnObj = await prompts(
            questions, 
            { 
                onCancel: () => { throw new Error("Prompt stopped") }
            }
        );
        
        generateFunctionComp(
            res.lang === "ts",
            res.type,
            res.fileName.trim().split(' ').join('')
        );
    } 
    catch (error: any) {
        return
    }
    
}