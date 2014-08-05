define(function() {
  return (function() {require.config({
    baseUrl: 'public/js',
    paths: {
      'jquery': 'http://apps.bdimg.com/libs/jquery/1.9.1/jquery.min',
      'bootstrap': 'http://apps.bdimg.com/libs/bootstrap/3.2.0/js/bootstrap.min'
    },
    shim: {
      'bootstrap': ['jquery']
    }
    //urlArgs: "bust=" + (new Date()).getTime()
  });})();
});
