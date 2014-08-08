define(['config', 'model/animate.model', 'control/event.center'], function(__Conf, __Animate, __Event) {
  return new (function(){
    var revert = function() {
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
      $(sections).each(function() {
        this.revert();
      });
      $(window).scroll(function() {
        $(sections).each(function() {
          this.scroll();
        });
      });
      $(window).resize(function() {
        var width = $(window).width();
        if (width < 600) width = 600;
        if (width > 1200) width = 1200;
        $('body').css('width', width * 0.8);
        $(sections).each(function() {
          this.resize(width);
          this.scroll();
        });
      });
    };
    this.init = function() {
      __Event.register('Animate', this);
      __Event.on('Animate', 'revert', revert);
      revert();
      $(window).resize();
    };
  })();
});