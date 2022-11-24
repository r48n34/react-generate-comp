import { strToSmallAndBig } from './supportGen/bigSmallLetter';
import { genComponents } from './supportGen/generateCode';
import { genRtkSlice } from './supportGen/genRTKSlice';
import { writeFolder } from './supportGen/writeFolder';

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
                "Writing components", 
                "\x1b[33m",
                compName,
                "\x1b[37m",
                "to",
                "\x1b[33m",
                process.cwd(),
                "\x1b[37m",
                "done."
            );

            return;
        }
    } catch (error: any) {
        console.log(error);
        return;
    }
}

export { generateFunctionComp };
