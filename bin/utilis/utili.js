"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFunctionComp = void 0;
const generateCode_1 = require("./supportGen/generateCode");
const writeFolder_1 = require("./supportGen/writeFolder");
function generateFunctionComp(isTypescript, compName = '') {
    try {
        let dataText = (0, generateCode_1.genComponents)(compName, isTypescript ? 'Typescript' : 'Javascript');
        let bigLetterStr = compName.length >= 1
            ? compName.charAt(0).toUpperCase() + compName.slice(1)
            : 'Test';
        bigLetterStr += isTypescript ? '.tsx' : '.jsx';
        let success = (0, writeFolder_1.writeFolder)(bigLetterStr, dataText);
        if (success) {
            console.log(`Writing components "${compName}" to "${process.cwd()}" Done.`);
            return;
        }
    }
    catch (error) {
        console.log(error);
        return;
    }
}
exports.generateFunctionComp = generateFunctionComp;
