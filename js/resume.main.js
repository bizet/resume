require(['requirejs.config'] , function() {
  require(['jquery', 'bootstrap'], function($) {
    $(function(){
      require([
        'view/animate.view', 'view/lang.view'
      ], function(__Animate, __Lang) {
        /*
        if((!!navigator.userAgent.match(/Trident\/7\./))) {
          $('body').html('Not Support Stupid IE');
          return;
        };
        */
        __Lang.init();
        __Animate.init();
          
      });
    });
  });
});