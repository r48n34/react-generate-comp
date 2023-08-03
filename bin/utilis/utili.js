"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{createCompTest:()=>createCompTest,generateFunctionComp:()=>generateFunctionComp});const _kolorist=require("kolorist");const _genRTKSlice=require("./supportGen/genRTKSlice");const _writeFolder=require("./supportGen/writeFolder");const _generateCode=require("./supportGen/generateCode");const _bigSmallLetter=require("./supportGen/bigSmallLetter");const _path=_interopRequireDefault(require("path"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function createCompTest(isTypescript,method="Comp",compName="",isNative=false){let dataText="";if(method==="Comp"){dataText=(0,_generateCode.genComponents)(compName,isTypescript?"Typescript":"Javascript",isNative)}else if(method==="Slice"){dataText=(0,_genRTKSlice.genRtkSlice)(compName,isTypescript?"Typescript":"Javascript")}let[fileName,_]=(0,_bigSmallLetter.strToSmallAndBig)(compName);method==="Slice"&&(fileName+="Slice");fileName+=isTypescript?".tsx":".jsx";return[fileName,dataText]}function generateFunctionComp(isTypescript,method="Comp",compName="",isNative=false){try{let[fileName,dataText]=createCompTest(isTypescript,method,compName,isNative);const success=(0,_writeFolder.writeFolder)(fileName,dataText);if(success){console.log("Success to write",(0,_kolorist.yellow)(fileName),"in",(0,_kolorist.yellow)(_path.default.join(process.cwd(),fileName)));return}else{console.log((0,_kolorist.yellow)(fileName),(0,_kolorist.lightRed)("already exist."))}}catch(error){console.log(error);return}}