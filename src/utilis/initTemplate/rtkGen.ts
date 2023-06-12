import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts";
import { rawGen } from "./rawGen.ts";
import { createFolderIfNotExist, genInsideFile } from "./initHelper.ts";
import { genStore } from "../supportGen/genStore.ts";
import { join } from "https://deno.land/std@0.191.0/path/mod.ts";

export async function rtkGen(isTypescript: boolean = true){
    rawGen(isTypescript);

    const folderList = ["store"].map( v => createFolderIfNotExist(v) );

    // store
    if(folderList[0]){
        genInsideFile("store", "users", "Slice", isTypescript);

        const genData = genStore("users", isTypescript);

        const currentPath = join(Deno.cwd(), "store", isTypescript ? "store.ts" : "store.js");
        await Deno.writeTextFile(currentPath, genData);

        console.log(
            colors.bold.cyan("Remember: Add the <Provider store={store}> to the main / index apps.")
        );
        
    }

}