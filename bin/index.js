#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:true});const _yargs=_interopRequireDefault(require("yargs/yargs"));const _useStateGenUtilis=require("./utilis/useStateGenUtilis");const _utili=require("./utilis/utili");const _promptSelect=require("./utilis/promptGen/promptSelect");const _initTemplate=require("./utilis/initTemplate/initTemplate");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}const parser=(0,_yargs.default)(process.argv.slice(2)).options({t:{type:"boolean",describe:"Enable typescript mode",default:false,alias:"typescript"},c:{type:"string",describe:"Generate comp name",alias:"generateComp"},s:{type:"string",describe:"Generate RTK slice",alias:"generateRTKSlice"},u:{type:"string",describe:"Generate useState line to your clipboard",alias:"generateUseState"},i:{type:"boolean",describe:"Init a new project require file and folder",alias:"init"}});_asyncToGenerator(function*(){console.log(`react-generate-comp`);const argv=yield parser.argv;const isTypescript=argv.t;const compName=argv.c;const sliceName=argv.s;const useStateName=argv.u;const init=argv.i;if(!!compName&&!!sliceName){return}if(!!init){(0,_initTemplate.initTemplate)();return}if(!!compName){(0,_utili.generateFunctionComp)(isTypescript,"Comp",compName.trim().split(" ").join(""));return}if(!!sliceName){(0,_utili.generateFunctionComp)(isTypescript,"Slice",sliceName.trim().split(" ").join(""));return}if(!!useStateName){(0,_useStateGenUtilis.useStateGen)(useStateName);return}yield(0,_promptSelect.activePromptOptions)()})();