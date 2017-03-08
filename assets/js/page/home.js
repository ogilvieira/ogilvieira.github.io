"use strict";

var APP = APP || {};

APP.pageHome = (function($){
  var obj = {
    $container : $('#main.pageHome')
  };

  obj.init = function(){
    if(!obj.$container.length){ return; }
    
    obj.$container.find('.animated').hide();
    APP.$body.find('#header').hide();

    setTimeout(function(){
      obj.$container.find('.animated').show(null, setTimeout(function(){
        obj.$container.toggleClass('is-active');
        APP.$body.find('#header').fadeIn();
      }, 300));
    }, 2000);

  };

  return obj;

}(jQuery || $));
