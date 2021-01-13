(function () {
  var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    theme: 'material',
    mode: 'ruby'
  });

  var btnRun = document.getElementById('btn-run'),
    btnBack = document.getElementById('btn-result-back');

  // Enable execution on content
  editor.on('keyup', function () {
    btnRun.disabled = editor.getValue().trim() == '';
  });

  var ul = document.getElementById('history');
  var active = document.querySelector('.active');

  // Run code on btnRun click
  btnRun.addEventListener(
    'click',
    function () {
      var code = editor.getValue().trim(),
        date = new Date();

      var self = this;
      self.disabled = true;
      btnBack.disabled = true;

      if (active) {
        active.className = '';
      }

      var progress = document.createElement('progress'),
        parent = ul.parentNode;
      progress.value = 0;
      progress.max = 100;
      parent.insertBefore(progress, ul);

      run(code, function (error, result) {
        var li = document.createElement('li'),
          p;
        li.className = 'active';

        p = document.createElement('p');
        p.textContent = result || ' '; // fix empty output
        if (error) {
          p.className = 'error';
          p.textContent = error.name + ': ' + error.message;
        }
        li.appendChild(p);

        p = document.createElement('p');
        var time = document.createElement('time');
        time.dateTime = date.toJSON();
        time.textContent = date.toString().match(/\d\d:\d\d/)[0];
        p.appendChild(time);
        p.appendChild(document.createTextNode(code));
        li.appendChild(p);

        if (active) {
          ul.insertBefore(li, active);
        } else {
          ul.appendChild(li);
        }
        active = li;

        parent.removeChild(progress);
        self.disabled = false;
        btnBack.disabled = false;
      });
    },
    false
  );
})();
