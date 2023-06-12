import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts";

import { genRtkSlice } from './supportGen/genRTKSlice.ts';
import { writeFolder } from './supportGen/writeFolder.ts';

import { genComponents } from './supportGen/generateCode.ts';
import { strToSmallAndBig } from './supportGen/bigSmallLetter.ts';
import { join } from "https://deno.land/std@0.191.0/path/mod.ts";

export function createCompTest(isTypescript: boolean, method: "Comp" | "Slice" = 'Comp', compName = ''): [string, string]{
    let dataText:string = "";

    if(method === "Comp"){
        dataText = genComponents( compName, isTypescript ? 'Typescript' : 'Javascript' );
    }
    else if(method === "Slice"){
        dataText = genRtkSlice( compName, isTypescript ? 'Typescript' : 'Javascript' );
    }

    let [ fileName, _ ] = strToSmallAndBig(compName);
    
    method === "Slice" && (fileName += "Slice")
    fileName += isTypescript ? '.tsx' : '.jsx';

    return [ fileName, dataText ]
}


async function generateFunctionComp(isTypescript: boolean, method: "Comp" | "Slice" = 'Comp', compName = '') {
    try {

        let [ fileName, dataText ] = createCompTest(isTypescript, method, compName)
        const success = await writeFolder(fileName, dataText);

        if (success) {
            
            console.log(
                "Success to write", 
                colors.bold.yellow(fileName),
                "in",
                colors.bold.yellow(join(Deno.cwd(), fileName))
            );

            return;
        }
        else{
            console.log(
                colors.bold.yellow(fileName),
                colors.bold.red("already exist.")
            );
        }

    } catch (error: any) {
        console.log(error);
        return;
    }
}

export { generateFunctionComp };
