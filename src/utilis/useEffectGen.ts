import clipboard from "clipboardy";
import { yellow } from 'kolorist'

function useEffectGen(): string {

    try {   
        const genCode = `useEffect(() => {\n\n},[])`
    
        clipboard.writeSync(genCode);
        console.log(
            "Success to copy", 
            yellow("useEffect"),
            "to your clipboard."
        );

        return genCode
    } 
    catch (error: any) {
        console.log(error.message);
        return ""
    }

}

export { useEffectGen }