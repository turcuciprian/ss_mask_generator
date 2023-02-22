# Machine Learning Images to Masks Generator Script

A simple nodejs script that allows users to transform images into image masks.

### Install

In the terminal in the root path of your project:

`npm i -D ml_images_to_masks_generator`

In a javascript file somewhere in the root path of your project:

`const { maskGenerator } = require('ml_images_to_masks_generator');`
`maskGenerator()`

### How to use

When you run it, it will create 2 folders if they don't exist. The two folder names are the first two parameters of the maskGenerator function. The first parameter is the input folder, which by default is named "images" and exists on the root path of the file where the script is ran.

The second parameter is going to be the output folder name and path for the masks.by default this folder is named "processed".

You can change the name of the folders by setting the parameters for each.

ex:

`maskGenerator('source_folder_','mask_destination_folder')`

### EXAMPLE

Let's say you have the folder images with 2 images in it:

```
| Images (folder)
|--Picture1.jpg (file)
|--Picture2.jpg (file)
```

Then you mark the images with a brush of the #FF0000 color (that is pure red) on the images where you want the masks to be.

After that you run the script and all your images with their names should be in the form masks in the "processed" folder (default second parameter name of the function)

Coming soon: the ability to create b&w images from your dataset of jpg images
