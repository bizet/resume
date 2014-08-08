
define(['jquery'], function($) {
  var in_view = function(el) {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top + rect.height/2) >= 0 && 
      rect.bottom <= ($(window).height() + rect.height/2)
    )
  };
  function User(opt) {
    this.elem = opt.elem;
    this.animate_css = opt.animate_css;
    //this.scroll_pos = opt.scroll_pos;
    this.done = false;
  };
  User.prototype =  {
    revert: function() {
      this.elem.removeClass(this.animate_css);
      this.done = false;
    },
    scroll: function() {
      if (!this.done) {
        //if (pos >= this.scroll_pos) {
        if (in_view(this.elem[0])) {
          this.elem[0].offsetWidth = this.elem[0].offsetWidth;
          this.elem.addClass(this.animate_css);
          /*
          var elm = this.elem[0];
          var newone = elm.cloneNode(true);
          $(newone).addClass(this.animate_css);
          elm.parentNode.replaceChild(newone, elm);
          */
          this.done = true;
        }
      }
    },
    resize: function(size) {
      var rate = size/10;
      this.elem.css('font-size', rate + '%');
      var b_height = 0;
      this.elem.children().each(function() {
        if ($(this).outerHeight() > b_height ) {
          b_height = $(this).outerHeight();
        }
      });
      this.elem.height(b_height);
    }
  };

  return User;
});

