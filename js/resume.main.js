require(['requirejs.config'] , function() {
  require(['jquery', 'bootstrap'], function($) {
    $(function(){
      require([
        'model/animate.model'
      ], function(Animate) {
          var init_win_width = $(window).width();
          var sections = [];
          sections.push(new Animate({
            elem: $('#section-basic-info'),
            animate_css: 'section-basic-info',
            scroll_pos: 0
          }));
          sections.push(new Animate({
            elem: $('#section-brief-intro'),
            animate_css: 'section-brief-intro',
            scroll_pos: 100
          }));
          sections.push(new Animate({
            elem: $('#section-alu'),
            animate_css: 'section-alu',
            scroll_pos: 400
          }));
          $(window).scroll(function() {
            var pos = $(window).scrollTop();
            $(sections).each(function() {
              this.run(pos);
            });
          })
          $(window).resize(function() {
            var width = $(window).width();
            if (width < 400) width = 400;
            if (width > 1200) width = 1200;
            $('body').css('width', width * 0.8);
            $(sections).each(function() {
              this.resize(width);
            });
          })
          $(window).scroll();
          $(window).resize();
      });
    });
  });
});