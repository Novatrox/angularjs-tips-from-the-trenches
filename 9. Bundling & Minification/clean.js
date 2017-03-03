let rimraf = require('rimraf');
let glob = require("glob")
let fs = require('fs');

console.log("Cleaning out build folder")
rimraf('build', (x) => {
    console.log("Cleaning out dist folder")
    rimraf('dist', () => {
        console.log("Cleaning out js & js.map files")
        glob("scripts/+(*.js|*.js.map)", function (er, files) {
            files.forEach(x => {
                fs.unlinkSync(x);
            });
        })
    });
});