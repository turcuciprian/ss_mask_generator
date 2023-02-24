import {existsSync, mkdirSync} from "fs";
export const createFolderIfMissing = (foldersWithPath : string[] = []) => {
    foldersWithPath.forEach((dir) => !existsSync(dir) && mkdirSync(dir));
};
