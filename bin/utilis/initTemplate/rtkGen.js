"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"rtkGen",{enumerable:true,get:()=>rtkGen});const _fs=_interopRequireDefault(require("fs"));const _path=_interopRequireDefault(require("path"));const _kolorist=require("kolorist");const _rawGen=require("./rawGen");const _initHelper=require("./initHelper");const _genStore=require("../supportGen/genStore");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function rtkGen(isTypescript=true){(0,_rawGen.rawGen)(isTypescript);const folderList=["store"].map(v=>(0,_initHelper.createFolderIfNotExist)(v));if(folderList[0]){(0,_initHelper.genInsideFile)("store","users","Slice",isTypescript);const genData=(0,_genStore.genStore)("users",isTypescript);const currentPath=_path.default.join(process.cwd(),"store",isTypescript?"store.ts":"store.js");_fs.default.writeFileSync(currentPath,genData);console.log((0,_kolorist.cyan)("Remember: Add the <Provider store={store}> to the main / index apps."))}}