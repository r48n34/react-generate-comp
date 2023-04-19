"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{createFolderIfNotExist:()=>createFolderIfNotExist,genInsideFile:()=>genInsideFile});const _fs=_interopRequireDefault(require("fs"));const _path=_interopRequireDefault(require("path"));const _kolorist=require("kolorist");const _utili=require("../utili");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function createFolderIfNotExist(folderName){try{const folderPath=_path.default.join(process.cwd(),folderName);if(!_fs.default.existsSync(folderPath)){_fs.default.mkdirSync(folderPath);console.log((0,_kolorist.green)("Folder"),(0,_kolorist.yellow)(folderName),(0,_kolorist.green)("success to create."));return true}else{console.log((0,_kolorist.lightRed)("Folder"),(0,_kolorist.yellow)(folderName),(0,_kolorist.lightRed)("already exist."));return false}}catch(error){console.log((0,_kolorist.lightRed)(error.message));return false}}function genInsideFile(folderName,fileName,method="Comp",isTypescript=true){let[finalfileName,dataText]=(0,_utili.createCompTest)(isTypescript,method,fileName);let currentPath=_path.default.join(process.cwd(),folderName,finalfileName);_fs.default.writeFileSync(currentPath,dataText)}