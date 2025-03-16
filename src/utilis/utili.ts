import { blue, lightRed, yellow } from 'kolorist'

import { genRtkSlice } from './supportGen/genRTKSlice';
import { writeFolder } from './supportGen/writeFolder';

import { genComponents } from './supportGen/generateCode';
import { strToSmallAndBig } from './supportGen/bigSmallLetter';
import path from 'path';

export function createCompTest(
    isTypescript: boolean,
    method: "Comp" | "Slice" = 'Comp',
    compName = '',
    isNative = false
): [string, string]{
    let dataText:string = "";

    if(method === "Comp"){
        dataText = genComponents( compName, isTypescript ? 'Typescript' : 'Javascript', isNative );
    }
    else if(method === "Slice"){
        dataText = genRtkSlice( compName, isTypescript ? 'Typescript' : 'Javascript' );
    }

    let [ fileName, _ ] = strToSmallAndBig(compName);
    
    method === "Slice" && (fileName += "Slice")
    fileName += isTypescript ? '.tsx' : '.jsx';

    return [ fileName, dataText ]
}

function generateFunctionComp(
    isTypescript: boolean,
    method: "Comp" | "Slice" = 'Comp',
    compName = '',
    isNative = false
) {
    try {

        let [ fileName, dataText ] = createCompTest(isTypescript, method, compName, isNative);
        console.log(blue(`Generating ${method} ${fileName}`));
        const success = writeFolder(fileName, dataText);

        if (success) {
            
            console.log(
                "Success to write", 
                yellow(fileName),
                "in",
                yellow(path.join(process.cwd(), fileName))
            );

            return;
        }
        else{
            console.log(
                yellow(fileName),
                lightRed("already exist.")
            );
        }

    } catch (error: any) {
        console.log(error);
        return;
    }
}

export { generateFunctionComp };
