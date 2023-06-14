import { strToSmallAndBig } from "./supportGen/bigSmallLetter.ts";
import * as clippy from "https://deno.land/x/clippy@v0.2.2/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts";

async function useStateGen(str:string): Promise<string> {

    if(!str || str === ""){
       return "" 
    }

    str = str.trim();

    const bigSmall = strToSmallAndBig(str)
    const genCode = `const [ ${bigSmall[1]}, set${bigSmall[0]} ] = useState<any>(0);`

    try {
        
        await clippy.write_text(genCode);
        console.log(
            "Success to copy", 
            colors.bold.yellow(genCode),
            "to your clipboard."
        );

        return genCode
    } 
    catch (error: any) {
        console.log(error.message);
        return genCode
    }

}

export { useStateGen }