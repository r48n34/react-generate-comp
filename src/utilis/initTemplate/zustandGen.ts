import fs from "node:fs";
import path from "node:path";
import { cyan } from "npm:kolorist";
import { rawGen } from "./rawGen.ts";
import { createFolderIfNotExist, genInsideFile } from "./initHelper.ts";
import { genZustand } from "../supportGen/genZustand.ts";

export function zustandGen(isTypescript: boolean = true){
    rawGen(isTypescript);

    const folderList = ["store"].map( v => createFolderIfNotExist(v) );

    // store
    if(folderList[0]){

        const genData = genZustand("bears", true);

        const currentPath = path.join(process.cwd(), "store", isTypescript ? "bearStore.ts" : "bearStore.js");
        fs.writeFileSync(currentPath, genData);

        console.log(
            "Remember to add the",
            cyan("yarn add zustand")
        );
        
    }

}