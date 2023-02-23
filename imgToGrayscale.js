import Jimp from "jimp";
import  { createFolderIfMissing }  from "./lib.js";
import fs from "fs";
export const imgToGrayscale =  (
  sourceFolder = "beforeGray",
  destinationFolder = "afterGray"
) =>{
  createFolderIfMissing([sourceFolder, destinationFolder]);
     
  const files = fs.readdirSync(sourceFolder);
    files.forEach(async (file) => {
        const image = await Jimp.read("beforeGray/" + file);
        image.grayscale();
        image.write("afterGray/" + file);
    });
    console.log(files);

};
