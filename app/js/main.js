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

})();
