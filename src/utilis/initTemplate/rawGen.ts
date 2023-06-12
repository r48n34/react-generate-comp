import { createFolderIfNotExist, genInsideFile } from "./initHelper.ts";

export async function rawGen(isTypescript: boolean = true){
    let folderGenList = ["pages", "components", "utils"];
    isTypescript && (folderGenList.push("interface"))

    // const folderList = folderGenList.map( v => createFolderIfNotExist(v) );

    const folderList = [];
    for(let v of ["store"]){
        folderList.push(await createFolderIfNotExist(v))
    }
    
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