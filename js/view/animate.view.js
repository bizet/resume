define(['config', 'model/animate.model'], function(__Conf, __Animate) {
  return new (function(){
    this.init = function() {
      var init_win_width = $(window).width();
      var sections = [];
      sections.push(new __Animate({
        elem: $('#section-basic-info'),
        animate_css: 'section-basic-info',
      }));
      sections.push(new __Animate({
        elem: $('#section-brief-intro'),
        animate_css: 'section-brief-intro',
      }));
      sections.push(new __Animate({
        elem: $('#section-alu'),
        animate_css: 'section-alu',
      }));
      sections.push(new __Animate({
        elem: $('#section-huawei'),
        animate_css: 'section-huawei',
      }));
      sections.push(new __Animate({
        elem: $('#section-end'),
        animate_css: 'section-end',
      }));
      $(window).scroll(function() {
        $(sections).each(function() {
          this.scroll();
        });
      })
      $(window).resize(function() {
        var width = $(window).width();
        if (width < 600) width = 600;
        if (width > 1200) width = 1200;
        $('body').css('width', width * 0.8);
        $(sections).each(function() {
          this.resize(width);
          this.scroll();
        });
      })
      $(window).resize();
    }
  })();
});