"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFunctionComp = void 0;
const bigSmallLetter_1 = require("./supportGen/bigSmallLetter");
const generateCode_1 = require("./supportGen/generateCode");
const genRTKSlice_1 = require("./supportGen/genRTKSlice");
const writeFolder_1 = require("./supportGen/writeFolder");
function generateFunctionComp(isTypescript, method = 'Comp', compName = '') {
    try {
        let dataText = "";
        if (method === "Comp") {
            dataText = (0, generateCode_1.genComponents)(compName, isTypescript ? 'Typescript' : 'Javascript');
        }
        else if (method === "Slice") {
            dataText = (0, genRTKSlice_1.genRtkSlice)(compName, isTypescript ? 'Typescript' : 'Javascript');
        }
        let [bigLetterStr, _] = (0, bigSmallLetter_1.strToSmallAndBig)(compName);
        method === "Slice" && (bigLetterStr += "Slice");
        bigLetterStr += isTypescript ? '.tsx' : '.jsx';
        const success = (0, writeFolder_1.writeFolder)(bigLetterStr, dataText);
        if (success) {
            console.log("Writing components", "\x1b[33m", compName, "\x1b[37m", " to ", "\x1b[33m", process.cwd(), "\x1b[37m", " done");
            return;
        }
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.generateFunctionComp = generateFunctionComp;
