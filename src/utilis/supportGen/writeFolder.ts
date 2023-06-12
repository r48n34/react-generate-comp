import { join } from "https://deno.land/std@0.191.0/path/mod.ts";
import { exists } from "https://deno.land/std@0.191.0/fs/mod.ts";

async function writeFolder(filename: string, data: string) {
    let currentPath = join(Deno.cwd(), filename);

    if(await exists(currentPath, {isReadable: true, isFile: true })){
        return false
    }
    
    await Deno.writeTextFile(currentPath, data);
    return true;
}

export { writeFolder };
