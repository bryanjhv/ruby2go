importScripts(
  '../lib/opal/opal/0.10.1/opal.js',
  '../lib/opal/opal/0.10.1/opal-parser.js'
);

Opal.load('opal-parser');


onmessage = function (event) {
  var data = event.data;

  var result, error;
  try {
    result = eval(Opal.compile(data.code));
  } catch (e) {
    error = { name: e.name, message: e.message };
  }

  postMessage({
    id: data.id,
    error: error,
    result: result
  });
};
