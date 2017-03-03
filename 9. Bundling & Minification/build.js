var path = require("path");
var Builder = require('systemjs-builder');

var builder = new Builder('scripts', 'build.config.js');

function doBuild(minify, output) {
    builder
        .bundle('app.js', output, { minify: minify })
        .then(function () {
            console.log('Build complete - ' + output);
        })
        .catch(function (err) {
            console.log('Build error');
            console.log(err);
        });
}

doBuild(false, 'build/bundle.js');
doBuild(true, 'dist/dist.js');