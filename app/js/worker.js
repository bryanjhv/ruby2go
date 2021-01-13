importScripts(
  '../lib/opal/opal/0.10.1/opal.js',
  '../lib/opal/opal/0.10.1/opal-parser.js',
  '../js/override.js'
);

Opal.load('opal-parser');

var result;
var console = {
  log: function (str) {
    result += str;
  },
  warn: function (str) {
    this.log('[warn] ' + str);
  }
};

onmessage = function (event) {
  var data = event.data;

  result = '';
  var error;
  try {
    reset();
    // both 'puts' and 'print' use console.log,
    // captured on global 'result', so just eval
    eval(Opal.compile(data.code));
    result = result.slice(0, -1);
  } catch (e) {
    error = { name: e.name, message: e.message };
  }

  postMessage({
    id: data.id,
    error: error,
    result: result
  });
};
