(function () {
  'use strict';

  var urls= [{"hash":"gg","description":"Google","url":"https://google.com"},{"hash":"amz","description":"Amazon","url":"https://amazon.com"}]; // this will be replaced with a real URL list.

  function url(hash) {
    for (var i = 0; i < urls.length; i++) {
      var url = urls[i];
      if (url.hash === hash) {
        return url.url;
      }
    }
    return null;
  }

  function main() {
    var hash = location.hash.split('#')[1];
    if (!hash) {
      return;
    }

    var redirect = url(hash);
    if (redirect) {
      location.href = redirect;
    }
  }
  window.addEventListener('hashchange', main);
  window.addEventListener('load', main);
  main();

  function initialize() {
    var inputs = [].slice.apply(document.getElementsByTagName('input'));
    inputs.forEach(function (input) {
      var base = location.href.split('#')[0];
      input.value = base + '#' + input.value;
      input.addEventListener('click', function (e) {
        e.target.setSelectionRange(0, e.target.value.length)
      });
    });
  }
  window.addEventListener('load', initialize);
})();
