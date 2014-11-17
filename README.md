panelBox
========

This library allows for the creation of dynamic, customizable information panels.

Downloading
============

Download panelBox.js directly from this site.

Demo
=====

A demo for this library is located [here] (http://overstreetce.github.io/panelBox/)

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

Also make sure to add the following CSS to your CSS file:

    .panel-show {display: block;}
    .panel-hide {display: none;}
    
Adding the Overlay

1) Add the following code either at the very top or very bottom of your HTML file

        <div id="overlay"></div>

2) Add the following CSS to your CSS file 

        #overlay{
        left:0;
        top:0;
        height:100%;
        width:100%;
        background:#000;
        opacity:0.7;
        z-index:99;
        position:fixed;
        display:none;
        }

3) NOTE: Background and opacity can be changed, make sure the Z-Index of your panel is higher than your overlay (you should change this as well)

Make sure that your panel content is enclosed in a div within the panel!

License
=======

MIT License

Copyright 2014 Chelsea Overstreet
