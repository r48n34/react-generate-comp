import fs from "fs";
import path from "path";
import { yellow, lightRed, green } from "kolorist";
import { createCompTest } from "../utili";

export function createFolderIfNotExist(folderName: string): boolean{

    try {   
        const folderPath = path.join(process.cwd(), folderName);
    
        if (!fs.existsSync(folderPath)){
            fs.mkdirSync(folderPath);
            console.log(green("Folder"), yellow(folderName),  green("success to create."));
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
export function genInsideFile(
    folderName: string,
    fileName: string,
    method: "Comp" | "Slice" = 'Comp',
    isTypescript: boolean = true
){
    let [ finalfileName, dataText ] = createCompTest(isTypescript, method, fileName);

    let currentPath = path.join(process.cwd(), folderName, finalfileName);
    fs.writeFileSync(currentPath, dataText);
}