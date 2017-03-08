"use strict";

var APP = APP || {};

APP.$body = $('body');

APP.pageClasses = document.querySelector('main').className.split(' ');

APP.Common = {
  init : function(){
    var $headerBrand = $('#header .brandname'),
        $btnMenu = $('#header .btn-menu');

    $headerBrand.html(function(){
      return $headerBrand.text().replace(/(a|e|i|o|u|\s)/gi, '<span class="h">$1</span>');
    });

    $btnMenu.on('click', function(e){
      e.preventDefault();

      $(this).find('.ion').toggleClass('ion-android-menu ion-android-close');
      $(this).parent().toggleClass('is-active');
      APP.$body.toggleClass('scroll-mobi-inactive');

    });
  }
};

APP.init = function(){
  this.Common.init();
  if(!this.pageClasses.length){ return; }
  for( var i in this.pageClasses ){
    try {
      if(!this.hasOwnProperty(this.pageClasses[i])){
        throw new Error('Class "'+this.pageClasses[i]+'" no exists.');
      } else if ( typeof this[this.pageClasses[i]].init !== 'function' ){
        throw new Error('Init function not found in "'+this.pageClasses[i]+'".');
      } else {
        this[this.pageClasses[i]].init();
      }
    } catch ( err ) {
      console.error( err );
    }
  }
};

$(document).ready(function(){
  APP.init();
});
