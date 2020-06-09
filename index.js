var compiler = require('vue-template-compiler');

exports.handlers = {
  beforeParse: function (e) {
    if (/\.vue$/.test(e.filename)) {
      var output = compiler.parseComponent(e.source,{ pad: 'line' });

      e.source = output.script ? output.script.content : '';
    }
  }
};
