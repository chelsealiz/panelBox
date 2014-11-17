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
              marginVert: null,
              marginHoriz: null,
              complete : null
            } 

        //Creates the functions that open and close the panel, also sets the options
        self.show = function(element){
            self.setOptions(element); 
            $(element).removeClass('panel-hide');
            $(element).addClass('panel-show');
            $('#overlay').css('display','block');
            self.animateOn(false, '.panel-show');
            // console.log($(element).children('first-child'));
            // $(element).children(':first-child').removeClass('content-hidden');
            // $(element).children(':first-child').addClass('content-visible');

        }

        self.hide = function(element){ 
           // $(element).children(':first-child').removeClass('content-visible');
           //  $(element).children(':first-child').addClass('content-hidden');
            self.animateOn(true, '.panel-show');
            $("#overlay").css('display','none');
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

          var vertMargin = settings.width
          for(var i = 0; i < vertMargin.length; i++){
              if(vertMargin.charAt(i)==="%"){
                vertMargin = vertMargin.substr(0,i);
                vertMargin = Number(vertMargin) /100;
                var winSize = $(document).width();
                vertMargin = vertMargin * winSize;
                vertMargin = vertMargin * -1;
              }
              else if(vertMargin.charAt(i)==="p"){
                vertMargin = vertMargin.substr(0, i);
                vertMargin = vertMargin * -1;
              }
          }


          settings.marginVert = vertMargin;

          var horizMargin = settings.height * -1;


          //Uses the direction to set the rest of the CSS, minus what's needed for animation
          if(direction === "top" || direction === "bottom"){
              $(element).css({
              width : settings.width,
              height : settings.height,
              background : settings.background,
              color : settings.textColor
            }); 
              if(direction==="top"){
                 $(element).css('margin-top', horizMargin+'px'); 
              }
               else{
                 $(element).css('margin-bottom', horizMargin); 
              }

          }
          else if(direction ==="right" || direction === "left"){
              $(element).css({
              width : settings.width,
              height : settings.height,
              background : settings.background,
              color : settings.textColor
            }); 
                if(direction==="right"){
                 $(element).css('margin-right', vertMargin); 
              }
               else{
                 $(element).css('margin-left', vertMargin+'px'); 
              }
          }           
        }

        //Animates the panel
        self.animateOn=function(toggleOff, element){
                var direction = settings.direction;
                var vertHeight = settings.marginVert;
                var horizHeight = settings.marginHoriz;

                if(toggleOff){
                    if(direction === 'top'){
                      $(element).animate({
                        marginTop:horizHeight
                      });
                    }
                    else if(direction === 'bottom'){
                      $(element).animate({
                        marginBottom:horizHeight
                      });
                    }
                    else if(direction === 'right'){
                      $(element).animate({
                        marginRight:vertHeight
                      });
                    }
                     else if(direction === 'left'){
                      $(element).animate({
                        marginLeft: vertHeight
                      });
                    }
                }
              else{
                    if(direction === 'top'){
                      $(element).animate({
                        marginTop:0
                      });
                    }
                    else if(direction === 'bottom'){
                      $(element).animate({
                        marginBottom:0
                      });
                    }
                    else if(direction === 'right'){
                      $(element).animate({
                        marginRight:0
                      });
                    }
                     else if(direction === 'left'){
                      $(element).animate({
                        marginLeft: 0
                      });
                    }
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
