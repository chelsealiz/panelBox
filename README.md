panelBox
========

This library allows for the creation of dynamic, customizable information panels.

Downloading
============

For basic use, download the "dist" file directly from this site for the minified versions.

For developmental use, download panelBox.js and panelBox.css directly from this site.

Demo
=====

A demo for this library is located [here] (http://overstreetce.github.io/panelBox/)

Using this Library
===================

This library is designed to be used either directly with HTML or with JavaScript

To use with HTML, simply download and add to your source files. Then add the following three lines to your code:

    <script type = "text/javascript" src ="path/jquery.js"></script>
    <script type = "text/javascript" src="path/panelBox.js"></script>
    <script> $('body').panel('watch'); </script>

Then, create your panel div. Add the "panel-hide" and "pb-panel" classes to the div. Now create the div you plan to use for your button. In the HTML tag for the div, add the following code(replacing yourPanel with the ID of your panel):

    data-panel="switch" data-target="#yourPanel"
    
To change the default features, add any of the following within the HTML tag with the previous two:

    Height: data-height
    Direction of panel(which side it came from): data-direction
    Width: data-width
    Background color: data-bg
    Text color: data-color

The content in your panel should be enclosed in a div with the "panel-content" class.

**TIP:** Changing the opacity and background for #overlay can change the color and opacity of the overlay

License
=======

MIT License

Copyright 2014 Chelsea Overstreet
