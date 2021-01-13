(function () {
  // Fetch the help text
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'help.html', false);
  xhr.send();

  // Parse into a DOM
  var parser = new DOMParser();
  var dom = parser.parseFromString(xhr.responseText, 'text/html');

  // Find out DOM for language
  var lang = navigator.language.split('-')[0];
  var elem = dom.getElementById('help-' + lang);
  if (!elem) {
    elem = dom.getElementById('help-en');
  }

  // Put it on main document
  document.getElementById('content-help').appendChild(elem);

  // Editor placeholder
  var holder = {
    en: 'Place your code here...',
    es: 'Coloca tu código aquí...'
  };
  document.getElementById('editor').placeholder = holder[lang] || holder.en;
})();
