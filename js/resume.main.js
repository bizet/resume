require(['requirejs.config'] , function() {
  require(['jquery', 'bootstrap'], function($) {
    $(function(){
      require([
        'model/animate.model'
      ], function(Animate) {
          var init_win_width = $(window).width();
          var basic_info = new Animate({
            elem: $('#div-basic-info'),
            animate_css: 'div-basic-info',
            scroll_pos: 0
          });
          $(window).scroll(function() {
            basic_info.run($(window).scrollTop());
          })
          $(window).resize(function() {
            var width = $(window).width();
            if (width < 400) width = 400;
            if (width > 1200) width = 1200;
            $('body').css('width', width * 0.8);
            basic_info.resize(width);
          })
          $(window).scroll();
          $(window).resize();
      });
    });
  });
});