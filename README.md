# Machine Learning Images to Masks Generator Script

A simple nodejs script that allows users to transform images into image masks.

When run, it will create 2 folders if they don't exist. The two folder names are the first two parameters of the maskGenerator function. The first parameter is the input folder, which by default is named "images" and exists on the root path of the file where the script is ran. 

The second parameter is going to be the output folder name and path for the masks.by default this folder is named "processed". 

You can change the name of the folders by setting the parameters for each.

ex:

`maskGenerator('source_folder_','mask_destination_folder')`

### How to use

In the terminal in the root path of your project:

`npm i -D ml_images_to_masks_generator`

In a javascript file somewhere in the root path of your project:

`const { maskGenerator } = require('ml_images_to_masks_generator');`
`maskGenerator()`
