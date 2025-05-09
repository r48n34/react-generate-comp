import clipboard from "clipboardy";
import { strToSmallAndBig } from "./supportGen/bigSmallLetter";
import { yellow } from 'kolorist'

function useStateGen(str:string): string {

    try {
        
        if(!str || str === ""){
           return "" 
        }

        str = str.trim();
    
        const bigSmall = strToSmallAndBig(str)
        const genCode = `const [ ${bigSmall[1]}, set${bigSmall[0]} ] = useState<number>(0);`
    
        clipboard.writeSync(genCode);
        console.log(
            "Success to copy", 
            yellow(genCode),
            "to your clipboard."
        );

        return genCode
    } 
    catch (error: any) {
        console.log(error.message);
        return ""
    }

}

export { useStateGen }