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

        }

        self.hide = function(element){ 
            $(element).removeClass('panel-show');
            $(element).addClass('panel-hide');
        }


        //On and Off switch for the function
        self.toggle = function(index, element){ 
            if($(element).hasClass('panel-show')){
                self.hide(element);
            }
            else if($(element).hasClass('panel-hide')){
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

           //Sets the direction
           var direction = settings.direction;
            $(element).css(direction,0);

          // Sets the rest of the elements
            $(element).css({
              width : settings.width,
              height : settings.height,
              background : settings.background,
              color : settings.textColor
            })
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



        return self;
    }
}(jQuery));
