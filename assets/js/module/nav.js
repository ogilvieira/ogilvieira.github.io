var APP = APP || {};

APP.Nav = (function($){
  var obj = {};
  obj.updateOffset = function(){
    obj.offset = $(obj.header).height();
  };

  obj.init = function(){
    obj.container = $('#nav');
    obj.header = $('#header');
    obj.WINDOW = $(window);
    obj.btnMenu = obj.container.find('.btn-menu');
    obj.BODY = $('body');

    obj.updateOffset();
    obj.addEvents();
  };

  obj.addEvents = function(){
    obj.WINDOW.on('resize', function(){
      obj.updateOffset();
    });
    obj.WINDOW.on('scroll', function(){
      if(window.pageYOffset > obj.offset){
        obj.container.addClass('is-active');
      } else {
        obj.container.removeClass('is-active');
      }
    });

    obj.btnMenu.on('click', function(e){
      e.preventDefault();
      $(this).find('.ion').toggleClass('ion-android-menu ion-android-close')
      obj.container.toggleClass('menu-open');
      // obj.container.toggleClass('menu-open');
      obj.BODY.toggleClass('menu-open');
    })
  };

  return obj;
}($));
