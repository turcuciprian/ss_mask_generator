# Machine Learning Images to Masks Generator Script

A simple nodejs script that allows users to transform images into image masks.

### Install

In the terminal in the root path of your project:

`npm install -D ml_images_to_masks_generator`

In a javascript file somewhere in the root path of your project:

`const { maskGenerator } = require('ml_images_to_masks_generator');`
`maskGenerator()`

### How to use

When you run it, it will create 2 folders if they don't exist. The two folder names are the first two parameters of the maskGenerator function. The first parameter is the input folder, which by default is named "images" and exists on the root path of the file where the script is ran.

The second parameter is going to be the output folder name and path for the masks.by default this folder is named "processed".

You can change the name of the folders by setting the parameters for each.

ex:

`maskGenerator('source_folder_','mask_destination_folder')`

I reccomend turning your pictures black and white before marking them

See example bellow:

### Black And White images

If you want to have a seamless experience with turning the images into accurate masks , you need to have pure red markings on your images. In order to have that I reccomend to turn all your images to black and white first

There is a module called imgToGrayscale that has a method with the same name in it that can be used to turn all the images in a source directory into grayscale images with the same name in a destination directory

 in test.js you have an  examples on how to use both of these methods (maskGenerator and imgToGrayscale)
