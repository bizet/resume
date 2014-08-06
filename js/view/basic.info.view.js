define([], function() {
  return function(opt) {
    var done = false;
    var elem = $('#div-basic-info');
    this.init = function(opt) {
    }
    this.animate = function() {
      if (!done) {
        elem.addClass('div-basic-info');
        done = true;
      }
    }
    this.resize = function(size) {

    }
  };
});