#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs/yargs"));
const utili_1 = require("./utilis/utili");
const parser = (0, yargs_1.default)(process.argv.slice(2)).options({
    t: {
        type: 'boolean',
        describe: 'Enable typescript mode',
        default: false,
        alias: 'typescript',
    },
    c: {
        type: 'string',
        describe: 'Generate comp name',
        alias: 'generateComp',
    },
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`react-generate-comp`);
    const argv = yield parser.argv;
    const compName = argv.c;
    const isTypescript = argv.t;
    if (!!compName) {
        (0, utili_1.generateFunctionComp)(isTypescript, compName.trim().split(' ').join(''));
    }
}))();
