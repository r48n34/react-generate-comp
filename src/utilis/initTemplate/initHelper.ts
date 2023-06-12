import { join } from "https://deno.land/std@0.191.0/path/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts";
import { exists } from "https://deno.land/std@0.191.0/fs/mod.ts";

import { createCompTest } from "../utili.ts";

export async function createFolderIfNotExist(folderName: string): Promise<boolean>{

    try {   
        const folderPath = join(Deno.cwd(), folderName);
    
        if (await exists(folderPath, {isReadable: true, isDirectory: true })){
            await Deno.mkdir(folderPath);
            console.log(colors.bold.green("Folder"), colors.bold.yellow(folderName),  colors.bold.green("success to create."));
            return true
        }
        else{
            console.log(colors.bold.red("Folder"), colors.bold.yellow(folderName), colors.bold.red("already exist."));
            return false
        }
    } 
    catch (error: any) {
        console.log(colors.bold.red(error.message)); 
        return false
    }
}

// Comp
export async function genInsideFile(
    folderName: string,
    fileName: string,
    method: "Comp" | "Slice" = 'Comp',
    isTypescript: boolean = true
){
    let [ finalfileName, dataText ] = createCompTest(isTypescript, method, fileName);

    let currentPath = join(Deno.cwd(), folderName, finalfileName);
    await Deno.writeTextFile(currentPath, dataText);
}