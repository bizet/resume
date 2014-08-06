require(['requirejs.config'] , function() {
  require(['jquery', 'bootstrap'], function($) {
    $(function(){
      require([
        'model/animate.model'
      ], function(Animate) {
          var init_win_width = $(window).width();
          var basic_info = new Animate({
            elem: $('#section-basic-info'),
            animate_css: 'section-basic-info',
            scroll_pos: 0
          });
          var brief_intro = new Animate({
            elem: $('#section-brief-intro'),
            animate_css: 'section-brief-intro',
            scroll_pos: 20
          });
          $(window).scroll(function() {
            basic_info.run($(window).scrollTop());
            brief_intro.run($(window).scrollTop());
          })
          $(window).resize(function() {
            var width = $(window).width();
            if (width < 400) width = 400;
            if (width > 1200) width = 1200;
            $('body').css('width', width * 0.8);
            basic_info.resize(width);
            brief_intro.resize(width);
          })
          $(window).scroll();
          $(window).resize();
      });
    });
  });
});