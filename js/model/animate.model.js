
define(['jquery'], function($) {
  function User(opt) {
    this.elem = opt.elem;
    this.animate_css = opt.animate_css;
    this.scroll_pos = opt.scroll_pos;
    this.done = false;
  };
  User.prototype =  {
    run: function(pos) {
      if (!this.done) {
        if (pos >= this.scroll_pos) {
          this.elem.addClass(this.animate_css);
          this.done = true;
        }
      }
    },
    resize: function(size) {
      var rate = size/10;
      this.elem.css('font-size', rate + '%');
    }
  };

  return User;
});

