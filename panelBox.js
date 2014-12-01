/*
 * Creates a Panel on any side you want that is openable and closeable
 * v. 1.0.0
 * Built by Chelsea
 * Github: github.com/overstreetce/panelBox
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
      marginWidth: null,
      marginHeight: null,
      complete : null
    } 

    //Creates the functions that open and close the panel, also sets the options
    self.show = function(element){
      self.setOptions(element); 
      self.setMargins(element);
      $(element).removeClass('panel-hide');
      $(element).addClass('panel-show');
      $('.panel-show').prepend('<div id="overlay">');
      $('#overlay').css('display','block');
      self.animateOn(false, '.panel-show');
    }


    self.hide = function(element){ 
      self.setOptions(element);
      $("#overlay").css('display','none');
      self.animateOn(true, '.panel-show');
    }


    //On and Off switch for the function
    self.toggle = function(index, element){ 
      if($(element).hasClass('panel-show')){
        self.hide(element);
        $(element).removeClass('panel-show');
      }
      else{
        self.show(element);
      }
      //Calls the function and returns it
      if ($.isFunction( settings.complete ) ) {
        settings.complete.call( this );
      } 
    }

    //Checks for HTML elements instead of JS
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

      //Sets all settings except margins
      $(element).css({
        width : settings.width,
        height : settings.height,
        background : settings.background,
        color : settings.textColor
      });
          
      //Sets the vertical margin for the div so that it can move properly
      var widthMargin = settings.width
      var num = widthMargin.search('%');
      var num2 = widthMargin.search('px');
      if(num != -1){
        widthMargin = widthMargin.replace('%', '');
        widthMargin = Number(widthMargin) /100;
        var winSize = $(window).width();
        widthMargin = widthMargin * winSize;
      }
      else if(num2!=-1){
        widthMargin = widthMargin.replace('px', '');
        widthMargin = Number(widthMargin);
      }
      widthMargin = widthMargin * -1;
      settings.marginWidth = widthMargin;

      //Sets the vertical margin for the div so that it can move properly
      var heightMargin = settings.height
      var num = heightMargin.search('%');
      var num2 = heightMargin.search('px');
      if(num != -1){
        heightMargin = heightMargin.replace('%', '');
        heightMargin = Number(heightMargin) /100;
        var winSize = $(window).height();
        heightMargin = heightMargin * winSize;
      }
      else if(num2!=-1){
        heightMargin = heightMargin.replace('px', '');
        heightMargin = Number(heightMargin);
      }
      heightMargin = heightMargin * -1;
      settings.marginHeight = heightMargin;    
    }

    self.setMargins=function(element){
      var direction = settings.direction;
      var heightMargin = settings.marginHeight;
      var widthMargin = settings.marginWidth;
           

      //Sets margins
      if(direction==="top"){
        $(element).css('margin-top', heightMargin+'px'); 
      }
      else if(direction==="bottom"){
        $(element).css('margin-bottom', heightMargin+'px'); 
      }
      else if(direction==="right"){
        $(element).css('margin-right', widthMargin+'px'); 
      }
      else{
        $(element).css('margin-left', widthMargin+'px'); 
      }
    }

    //Animates the panel
    self.animateOn=function(toggleOff, element){
      var direction = settings.direction;
      var marginWide = settings.marginWidth;
      var marginTall = settings.marginHeight;

      if(toggleOff){
        if(direction === 'top'){
          $(element).animate({
          marginTop:marginTall
          }, function(){
           $(element).removeClass('panel-show');
          });
        }
        else if(direction === 'bottom'){
          $(element).animate({
            marginBottom:marginTall
          }, function(){$(element).removeClass('panel-show');});
        }
        else if(direction === 'right'){
          $(element).animate({
            marginRight:marginWide
          }, function(){$(element).removeClass('panel-show');});
        }
        else if(direction === 'left'){
          $(element).animate({
            marginLeft: marginWide
          }, function(){$(element).removeClass('panel-show');});
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
