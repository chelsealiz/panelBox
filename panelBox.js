/*
 * Creates a Panel on any side you want that is openable and closeable
 * v. 1.0.0
 * Built by Chelsea
 * Github: github.com/overstreetce/alert-panel
 *
 */
(function($){
    $.fn.panel = function(options){
        // Creates variables for the selector and the settings
        var self = this;
        var settings;
        var finalHeight;
        var finalWidth;
        var defaults = { 
              width: '100%',
              height: '50%',
              direction:'top',
              background: '#ffffff',
              textColor: '#000000',
              complete : null
            } 

        //Creates the functions that open and close the panel, also sets the options
        self.show = function(element){ 
            self.setOptions(element); 
            $(element).removeClass('panel-hide');
            $(element).addClass('panel-show');
            self.animateOn(false, '.panel-show');

        }

        self.hide = function(element){ 
            self.animateOn(true, '.panel-show');
             $(element).removeClass('panel-show');
        }


        //On and Off switch for the function
        self.toggle = function(index, element){ 
            if($(element).hasClass('panel-show')){
                self.hide(element);
            }
            else{
                self.show(element);
            }
           //Calls the function and returns it
          if ($.isFunction( settings.complete ) ) {
            settings.complete.call( this );
            } 
        }


        self.watch = function(){
          $('div[data-panel="switch"]').on('click', function(){

            var target = $(this).attr('data-target'); 
           var options = {
              width : $(this).attr('data-width') || '100%',
              height: $(this).attr('data-height') || '50%',
              direction: $(this).attr('data-direction') || 'top',
              background: $(this).attr('data-bg') || '#FFFFFF',
              textColor: $(this).attr('data-color') || '#000000'
           } 
            settings = $.extend(defaults, options);
            $(target).each(self['toggle']);
          })
          $('button[data-panel="dismiss"]').on('click', function(){
            var target = $(this).attr('data-target'); 
             $(target).each(self['toggle']);
          })
        }

        //Sets the different options on the panel class
        self.setOptions = function(element){
          // Sets the direction
          var direction = settings.direction;
          $(element).css(direction, 0);

          //Uses the direction to set the rest of the CSS, minus what's needed for animation
          if(direction === "top" || direction === "bottom"){
              $(element).css({
              width : settings.width,
              height : '0px',
              background : settings.background,
              color : settings.textColor
            }); 
          }
          else if(direction ==="right" || direction === "left"){
              $(element).css({
              width : '0px',
              height : settings.height,
              background : settings.background,
              color : settings.textColor
            }); 
          }           
        }

        //Animates the panel
        self.animateOn=function(toggleOff, element){
                var direction = settings.direction;
         if(direction === "top" || direction === "bottom"){
            var height=settings.height;
          //Checks through to see if the height is in px or %
          console.log($(window).height());
            for(var i =0; i < height.length; i++){
            if(height.charAt(i)==="%"){
              height=height.substr(0,i);
              height=Number(height);
              var windowHeight= $(window).innerHeight();
              height = windowHeight * (height/100);
              settings.height = height;
            }
            else if(height.charAt(i)==="p"){
                height=height.substr(0,i);
                height=Number(height);
                settings.height = height;
              }
            }
          

          if(toggleOff) {
            $(element).animate({
              height: 0
            });
          }
          else {
              $(element).animate({
              height: settings.height
            });
          } 
         }

          else if(direction ==="right" || direction === "left"){
           var width=settings.width;
          //Checks through to see if the height is in px or %
            for(var i =0; i < width.length; i++){
            if(width.charAt(i)==="%"){
              width=width.substr(0,i);
              width=Number(width);
              var windowwidth= $(window).width();
              width = windowwidth * (width/100);
              settings.width = width;
            }
            else if(width.charAt(i)==="p"){
              width=width.substr(0,i);
              width=Number(width);
               settings.width = width;
            }
          }
          if(toggleOff){
            $(element).animate({
              width: 0
            });
          }
          else
              $(element).animate({
              width: settings.width
            });

          }
        }


         // If the object is a string
        if (typeof options === "string"){
             self.each(self[options]); 
            }

        //If the object is an object or empty
        if (!options || typeof options === "object"){
            settings = $.extend(defaults, options);
             self.each(self['toggle']); 
            } 
        }

        return self;
}(jQuery));
