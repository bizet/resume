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
          }));
          sections.push(new Animate({
            elem: $('#section-brief-intro'),
            animate_css: 'section-brief-intro',
          }));
          sections.push(new Animate({
            elem: $('#section-alu'),
            animate_css: 'section-alu',
          }));
          sections.push(new Animate({
            elem: $('#section-huawei'),
            animate_css: 'section-huawei',
          }));
          $(window).scroll(function() {
            $(sections).each(function() {
              this.scroll();
            });
          })
          $(window).resize(function() {
            var width = $(window).width();
            if (width < 400) width = 400;
            if (width > 1200) width = 1200;
            $('body').css('width', width * 0.8);
            $(sections).each(function() {
              this.resize(width);
              this.scroll();
            });
          })
          $(window).resize();
      });
    });
  });
});