import clipboard from "clipboardy";
import { strToSmallAndBig } from "./supportGen/bigSmallLetter";

function useStateGen(str:string): string {

    try {
        str = str.trim();
    
        if(!str || str === ""){
           return "" 
        }
    
        const bigSmall = strToSmallAndBig(str)
        const genCode = `const [ ${bigSmall[1]}, set${bigSmall[0]} ] = useState<any>(0);`
    
        clipboard.writeSync(genCode);
        console.log(
            "Success to copy", 
            "\x1b[33m",
            genCode,
            "\x1b[37m",
            "to your clipboard."
        );

        return genCode
    } 
    catch (error: any) {
        console.log(error.message);
        return 
    }

}

export { useStateGen }