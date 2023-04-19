import { createFolderIfNotExist, genInsideFile } from "./initHelper";

export function rawGen(isTypescript: boolean = true){
    const folderList = ["pages", "interface", "components", "utils"].map( v => createFolderIfNotExist(v) );
    
    // pages
    if(folderList[0]){
        genInsideFile("pages", "homePage", "Comp", isTypescript);
        genInsideFile("pages", "otherPage", "Comp", isTypescript);
    }

    // components
    if(folderList[2]){
        genInsideFile("components", "appleComp", "Comp", isTypescript);
    }

}