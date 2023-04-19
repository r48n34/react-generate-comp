import path from "path";
import fs from "fs";
import { yellow, cyan, lightRed } from 'kolorist'
import { createCompTest } from "../utili";

function createFolderIfNotExist(folderName: string): boolean{

    try {   
        const folderPath = path.join(process.cwd(), folderName);
    
        if (!fs.existsSync(folderPath)){
            fs.mkdirSync(folderPath);
            console.log("Success to create folder", yellow(folderName));
            return true
        }
        else{
            console.log(lightRed("Folder"), yellow(folderName),  lightRed("already exist."));
            return false
        }
    } 
    catch (error: any) {
        console.log(lightRed(error.message)); 
        return false
    }
}

// Comp
function genInsideFile(folderName: string, fileName: string){
    let [ finalfileName, dataText ] = createCompTest(true, "Comp", fileName);

    let currentPath = path.join(process.cwd(), folderName, finalfileName);
    fs.writeFileSync(currentPath, dataText);
}

export function initTemplate(){

    const folderList = ["pages", "interface", "components"].map( v => createFolderIfNotExist(v) );

    // pages
    if(folderList[0]){
        genInsideFile("pages", "homePage");
        genInsideFile("pages", "otherPage");
    }

    // components
    if(folderList[2]){
        genInsideFile("components", "appleComp");
    }

    console.log(
        cyan("Done, enjoy your new project :)")
    );
    
}