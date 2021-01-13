(function () {
  var worker;
  var callbacks = {},
    id = 1,
    count = 0;

  function onmessage(event) {
    var data = event.data,
      id = data.id;

    count--;
    callbacks[id](data.error, data.result);
    delete callbacks[id];
  }

  function startWorker() {
    worker = new Worker('js/worker.js');
    worker.onmessage = onmessage;
  }

  startWorker();

  function run(code, callback) {
    callbacks[id] = callback;
    count++;

    worker.postMessage({
      id: id++,
      code: code
    });
  }
  this.run = run;

  document.addEventListener(
    'visibilitychange',
    function () {
      if (document.hidden) {
        if (count == 0) {
          worker.terminate();
          worker = null;
        }
      } else if (!worker) {
        startWorker();
      }
    },
    false
  );
})();
