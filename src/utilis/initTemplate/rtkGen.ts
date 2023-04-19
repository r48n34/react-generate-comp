import fs from "fs";
import path from "path";
import { cyan } from "kolorist";
import { rawGen } from "./rawGen";
import { createFolderIfNotExist, genInsideFile } from "./initHelper";
import { genStore } from "../supportGen/genStore";

export function rtkGen(isTypescript: boolean = true){
    rawGen(isTypescript);

    const folderList = ["store"].map( v => createFolderIfNotExist(v) );

    // store
    if(folderList[0]){
        genInsideFile("store", "users", "Slice", isTypescript);

        const genData = genStore("users", isTypescript);

        const currentPath = path.join(process.cwd(), "store", isTypescript ? "store.ts" : "store.js");
        fs.writeFileSync(currentPath, genData);

        console.log(
            cyan("Remember: Add the <Provider store={store}> to the main / index apps.")
        );
        
    }

}