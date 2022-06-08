"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strToSmallAndBig = void 0;
function strToSmallAndBig(inputName) {
    const bigLetterStr = inputName.length >= 1 ? inputName.charAt(0).toUpperCase() + inputName.slice(1) : 'Values';
    const lowLetterStr = inputName.length >= 1 ? inputName.charAt(0).toLowerCase() + inputName.slice(1) : 'values';
    return [bigLetterStr, lowLetterStr];
}
exports.strToSmallAndBig = strToSmallAndBig;
