import { yellow } from 'kolorist'

import { genRtkSlice } from './supportGen/genRTKSlice';
import { writeFolder } from './supportGen/writeFolder';

import { genComponents } from './supportGen/generateCode';
import { strToSmallAndBig } from './supportGen/bigSmallLetter';


function generateFunctionComp(isTypescript: boolean, method:"Comp"| "Slice" = 'Comp', compName = '') {
    try {

        let dataText:string = "";

        if(method === "Comp"){
            dataText = genComponents( compName, isTypescript ? 'Typescript' : 'Javascript' );
        }
        else if(method === "Slice"){
            dataText = genRtkSlice( compName, isTypescript ? 'Typescript' : 'Javascript' );
        }

        let [ bigLetterStr, _ ] = strToSmallAndBig(compName);
        
        method === "Slice" && (bigLetterStr += "Slice")
        bigLetterStr += isTypescript ? '.tsx' : '.jsx';
        
        const success = writeFolder(bigLetterStr, dataText);

        if (success) {
            
            console.log(
                "Success to write", 
                yellow(bigLetterStr),
                "in",
                yellow(process.cwd())
            );

            return;
        }
    } catch (error: any) {
        console.log(error);
        return;
    }
}

export { generateFunctionComp };
