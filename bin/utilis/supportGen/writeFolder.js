"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"writeFolder",{enumerable:true,get:()=>writeFolder});const _fs=_interopRequireDefault(require("fs"));const _path=_interopRequireDefault(require("path"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function writeFolder(filename,data){let currentPath=_path.default.join(process.cwd(),filename);if(_fs.default.existsSync(currentPath)){return false}_fs.default.writeFileSync(currentPath,data);return true}