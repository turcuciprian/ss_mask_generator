console.log("maskGenerator.js");
import Jimp from "jimp";
import fs from "fs";

import { createFolderIfMissing } from "./lib.js";

//all images in a directory that have the pixels #FF0000 are turned to #FFFFFF and the rest black
export const maskGenerator = async (
  inputDirectory = "images/",
  outputDirectory = "processed/"
) => {
  createFolderIfMissing([inputDirectory, outputDirectory]);
  // Read all the files in the input directory
  const files = fs.readdirSync(inputDirectory);

  // Loop through each file in the directory
  for (const file of files) {
    // make sure that the file is an image
    if (!file.match(/\.(jpg|jpeg|png|gif)$/)) {
      continue;
    }
    // Load the image
    const image = await Jimp.read(inputDirectory + file);

    // Loop through every pixel in the image
    for (let i = 0; i < image.bitmap.width; i++) {
      for (let j = 0; j < image.bitmap.height; j++) {
        // Get the RGBA values of the current pixel
        const { r, g, b, a } = Jimp.intToRGBA(image.getPixelColor(i, j));

        // If the pixel is red, replace it with white
        if (r > 200 && g < 50 && b < 50) {
          image.setPixelColor(Jimp.rgbaToInt(255, 255, 255, a), i, j);
        } else {
          // Otherwise, replace it with black
          image.setPixelColor(Jimp.rgbaToInt(0, 0, 0, a), i, j);
        }
      }
    }

    // Save the image
    image.write(outputDirectory + "/" + file);
  }
};
