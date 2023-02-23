import fs from "fs";
export const createFolderIfMissing = (foldersWithPath = []) => {
  foldersWithPath.forEach((dir) => !fs.existsSync(dir) && fs.mkdirSync(dir));
};
