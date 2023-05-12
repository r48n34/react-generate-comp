import fs from "fs";
import path from "path";
import { cyan } from "kolorist";
import { rawGen } from "./rawGen";
import { createFolderIfNotExist, genInsideFile } from "./initHelper";
import { genZustand } from "../supportGen/genZustand";

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