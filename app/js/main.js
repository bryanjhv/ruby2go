(function () {

  var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    theme: 'material',
    mode: 'ruby'
  });

  var btnRun = document.getElementById('btn-run');

  // Enable execution on content
  editor.
  on('keyup', function () {
    btnRun.disabled = editor.getValue().trim() == '';
  });

  var ul = document.getElementById('history');
  var active = document.querySelector('.active');

  // Run code on btnRun click
  btnRun.addEventListener('click', function () {
    var code = editor.getValue().trim(),
      date = new Date();

    var self = this;
    self.disabled = true;

    if (active) {
      active.className = '';
    }

    var progress = document.createElement('progress'),
      parent = ul.parentNode;
    progress.value = 0;
    progress.max = 100;
    parent.appendChild(progress);

    run(code, function (error, result) {
      var li = document.createElement('li'), p;
      li.className = 'active';

      p = document.createElement('p');
      li.appendChild(p);
      p.innerText = result || ' '; // fix empty output
      if (error) {
        p.className = 'error';
        p.innerText = error.name + ': ' + error.message;
      }

      p = document.createElement('p');
      li.appendChild(p);
      var time = document.createElement('time');
      time.dateTime = date.toJSON();
      time.innerText = date.toString().slice(16, -12);
      p.appendChild(time);
      p.insertAdjacentText('beforeend', code);

      if (active) {
        ul.insertBefore(li, active);
      } else {
        ul.appendChild(li);
      }
      active = li;

      parent.removeChild(progress);
      self.disabled = false;
    });
  }, false);

})();
