const path = require('path');
const rmUnusedCss = require('rm-unused-css');

function CssCleanupWebpackPlugin() {
    // No options
}

CssCleanupWebpackPlugin.prototype.apply = function(compiler) {
    compiler.plugin("emit", function (compilation, callback) {
        let fileContents = '';
        let cssFileCount = 0;

        for (let filename in compilation.assets) {
            let ext = path.extname(filename);
            if (ext === '.html' || ext === '.htm' || ext === '.js') {
                fileContents += compilation.assets[filename].source();
            } else if (ext === '.css') {
                cssFileCount++;
            }
        }

        for (let filename in compilation.assets) {
            if (path.extname(filename) === '.css') {
                let data = compilation.assets[filename].source();
                rmUnusedCss(data.toString(), {path: null, content: fileContents, override: false}).then((result) => {
                    compilation.assets[filename] = {
                        source: function () {
                            return result.newContent;
                        },
                        size: function () {
                            return result.newContent.length;
                        }
                    };
                    cssFileCount--;
                    if (cssFileCount === 0) {
                        callback();
                    }
                });
            }
        }

        if (cssFileCount === 0) {
            callback();
        }
    });
};

module.exports = CssCleanupWebpackPlugin;
