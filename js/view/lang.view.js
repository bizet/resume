define(['config'], function(__Conf) {
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
        $(window).resize();
      });
      
      $('#chose_lang').find('[lang=zh]').click();
    }
  })();
});