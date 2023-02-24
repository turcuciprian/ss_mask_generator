import {read, intToRGBA, rgbaToInt} from "jimp";
import {readdirSync} from "fs";

import {createFolderIfMissing} from "./lib";

// all images in a directory that have the pixels #FF0000 are turned to #FFFFFF and the rest black
export const maskGenerator = async (inputDirectory : string = "images/", outputDirectory : string = "processed/") => {
    createFolderIfMissing([inputDirectory, outputDirectory]);
    // Read all the files in the input directory
    const files = readdirSync(inputDirectory);

    // Loop through each file in the directory
    for (const file of files) { // make sure that the file is an image
        if (! file.match(/\.(jpg|jpeg|png|gif)$/)) {
            continue;
        }
        // Load the image
        const image = await read(inputDirectory + file);

        // Loop through every pixel in the image
        for (let i : number = 0; i < image.bitmap.width; i++) {
            for (let j : number = 0; j < image.bitmap.height; j++) { // Get the RGBA values of the current pixel
                const {r, g, b, a} = intToRGBA(image.getPixelColor(i, j));

                // If the pixel is red, replace it with white
                if (r > 200 && g < 50 && b < 50) {
                    image.setPixelColor(rgbaToInt(255, 255, 255, a), i, j);
                } else { // Otherwise, replace it with black
                    image.setPixelColor(rgbaToInt(0, 0, 0, a), i, j);
                }
            }
        }

        // Save the image
        image.write(outputDirectory + "/" + file);
    }
};
