(function (document) {
  var pages = [document.querySelector('section').id.substr(5)];

  function pass(cls) {
    document.getElementById('page-' + pages[pages.length - 1]).className = cls;
  }

  function onClick() {
    var data = this.dataset;
    this.disabled = true;

    if (data.back != null) {
      pass('current-right');
      pages.pop();
      pass('left-current');
    } else if (data.href) {
      pass('current-left');
      pages.push(data.href);
      pass('right-current');
    }

    this.disabled = false;
  }

  var buttons = document.querySelectorAll('button');
  for (var i = 0, l = buttons.length; i < l; i++) {
    buttons[i].addEventListener('click', onClick, false);
  }
})(document);
