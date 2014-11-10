panelBox
========

This library allows for the creation of dynamic, customizable information panels.

Downloading
============

Clone this repository to use

Demo
=====

A demo for this library is located at http://overstreetce.github.io/panelBox/

Using this Library
===================

This library is designed to be used either directly with HTML or with JavaScript

To use with HTML, simply download and add to your source files. Then add the following two lines to your code

    <script type = "text/javascript" src ="path/jquery.js"></script>
    <script type = "text/javascript" src="path/panelBox.js"></script>

Then, create your panel div. Add the "panel-hide" class to the div. Now create the div you plan to use for your button. In the HTML tag for the div, add the following code

    data-panel="switch" data-target="#yourPanel"
    
To change the default features, add any of the following within the HTML tag with the previous two.

Height: data-height
Direction of panel(which side it came from): data-direction
Width: data-width
Background color: data-bg
Text color: data-color

License
=======

MIT License

Copyright 2014 Chelsea Overstreet
