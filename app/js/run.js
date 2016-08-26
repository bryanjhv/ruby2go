(function () {

  var worker = new Worker('js/worker.js');
  var callbacks = {}, id = 1;

  worker.onmessage = function (event) {
    var data = event.data,
      id = data.id;

    if (callbacks[id]) {
      callbacks[id](data.error, data.result);
      delete callbacks[id];
    }
  };


  function run(code, callback) {
    callbacks[id] = callback;

    worker.postMessage({
      id: id++,
      code: code
    });
  }
  this.run = run;

})();
