import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts";
import { generateFunctionComp } from '../utili.ts';
import { Input, Select, prompt } from "https://deno.land/x/cliffy@v0.25.7/prompt/mod.ts";

export async function activePromptOptions(){

    try {

        const questions = await prompt([
            {
                name: "type",
                message: "Select a type to generate",
                type: Select,
                options: [
                    { name: colors.bold.cyan("Components"), value: "Comp" },
                    { name: colors.bold.green("RTK Slice"), value: "Slice" }
                ],
            },
            {
                type: Input,
                name: 'fileName',
                default: "users",
                message: 'What is your file name?',
                minLength: 1
                
                // validate: (v:string | null) => {
    
                //   if(!v || v !== path.basename(v)){
                //       return "Missing file name or invalid file name"
                //   }
    
                //   if(v.endsWith(".")){
                //       return "Dot(.) can not be named at last"
                //   }
    
                //   return true
                // }
            },
            {
                name: "languages",
                message: "Select a languages",
                type: Select,
                options: [
                    { name: colors.bold.blue("Typescript"), value: "ts" },
                    { name: colors.bold.yellow("Javascript"), value: "js" },
                ],
            },
        ]);

        // console.log(questions);

        await generateFunctionComp(
            questions.languages === "ts",
            questions.type as "Comp" | "Slice",
            questions.fileName!.trim().split(' ').join('')
        );
    } 
    catch (error: any) {
        return
    }
    
}