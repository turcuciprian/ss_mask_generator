import Jimp from "jimp";
import {createFolderIfMissing} from "./lib";
import fs from "fs";
const sourceFolderDefault = "beforeGray";
const destinationFolderDefault = "afterGray";
export const imgToGrayscale = (sourceFolder : string = sourceFolderDefault, destinationFolder : string = destinationFolderDefault) => {
    createFolderIfMissing([sourceFolder, destinationFolder]);

    const files = fs.readdirSync(sourceFolder);
    files.forEach(async (file) => {
        const image = await Jimp.read(`${sourceFolderDefault}/${file}`);
        image.grayscale();
        image.write(`${destinationFolderDefault}/${file}`);
        // log the image to the console with base path included
        // log nthe file name with the destinaltion folder included
        console.log(`${destinationFolderDefault}/${file}`);

    });
};
