"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkProjectType = exports.findFile = exports.fileExists = void 0;
const path = __importStar(require("path"));
const vscode_1 = require("vscode");
async function fileExists(file) {
    try {
        await vscode_1.workspace.fs.stat(vscode_1.Uri.file(file));
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.fileExists = fileExists;
async function findFile(searchPath, fileName) {
    for (;;) {
        const filePath = path.join(searchPath, fileName);
        if (await fileExists(filePath)) {
            return filePath;
        }
        const parentPath = path.dirname(searchPath);
        if (parentPath === searchPath) {
            return;
        }
        searchPath = parentPath;
    }
}
exports.findFile = findFile;
async function checkProjectType(path) {
    const tsconfig = await findFile(path, 'tsconfig.json');
    const jsconfig = await findFile(path, 'jsconfig.json');
    const isTs = !!tsconfig && (!jsconfig || tsconfig.length >= jsconfig.length);
    if (isTs) {
        try {
            const packageJSONPath = require.resolve('typescript/package.json', {
                paths: [tsconfig]
            });
            const { version } = require(packageJSONPath);
            const [major, minor] = version.split('.');
            if ((Number(major) === 4 && Number(minor) >= 9) || Number(major) > 4) {
                return 'ts-satisfies';
            }
            else {
                return 'ts';
            }
        }
        catch (e) {
            return 'ts';
        }
    }
    else {
        return 'js';
    }
}
exports.checkProjectType = checkProjectType;
//# sourceMappingURL=utils.js.map