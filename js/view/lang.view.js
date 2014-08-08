define(['config', 'control/event.center'], function(__Conf, __Event) {
  return new (function(){
    var fill_lang_str = function(lang) {
      $('*[str]').each(function() {
        var str_name = $(this).attr('str');
        $(this).html(__Conf.content_str[lang][str_name]);
      });
    };
    this.init = function() {
      $('#chose_lang').click(function(e) {
        var d = $(e.target);
        if (!d.attr('lang')) {return;};
        $(this).children().css('font-weight', 'normal');
        d.css('font-weight', 'bold');
        fill_lang_str(d.attr('lang'));
        $('section').each(function() {
          $(this).replaceWith($(this).clone());
        });
        __Event.trigger('Animate', 'revert');
        $(window).resize();
      });
      
    }
  })();
});