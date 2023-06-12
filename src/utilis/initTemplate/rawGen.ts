import { createFolderIfNotExist, genInsideFile } from "./initHelper.ts";

export function rawGen(isTypescript: boolean = true){
    let folderGenList = ["pages", "components", "utils"];
    isTypescript && (folderGenList.push("interface"))

    const folderList = folderGenList.map( v => createFolderIfNotExist(v) );
    
    // pages
    if(folderList[0]){
        genInsideFile("pages", "homePage", "Comp", isTypescript);
        genInsideFile("pages", "otherPage", "Comp", isTypescript);
    }

    // components
    if(folderList[1]){
        genInsideFile("components", "appleComp", "Comp", isTypescript);
    }

}