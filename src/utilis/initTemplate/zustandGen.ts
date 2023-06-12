
import { rawGen } from "./rawGen.ts";
import { createFolderIfNotExist } from "./initHelper.ts";
import { genZustand } from "../supportGen/genZustand.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts";

import { join } from "https://deno.land/std@0.191.0/path/mod.ts";


export async function zustandGen(isTypescript: boolean = true){
    rawGen(isTypescript);

    // const folderList = ["store"].map( v => createFolderIfNotExist(v) );

    const folderList = [];
    for(let v of ["store"]){
        folderList.push(await createFolderIfNotExist(v))
    }

    // store
    if(folderList[0]){

        const genData = genZustand("bears", true);

        const currentPath = join(Deno.cwd(), "store", isTypescript ? "bearStore.ts" : "bearStore.js");
        await Deno.writeTextFile(currentPath, genData);

        console.log(
            "Remember to add the",
            colors.bold.cyan("yarn add zustand")
        );
        
    }

}