"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFolder = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function writeFolder(filename, data) {
    let currentPath = path_1.default.join(process.cwd(), filename);
    fs_1.default.writeFileSync(currentPath, data);
    return true;
}
exports.writeFolder = writeFolder;
