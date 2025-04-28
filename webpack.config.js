const path = require('path'); // Node dependency for working with paths on the filesystem
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Depend on an plugin to handle bundling HTML

module.exports = {
    mode: 'development', // Defines the optimization level. Is either development, production, or none.
    entry: './src/index.js', // Entry point: the root of the dependency graph
    output: { // Info about the output of bundling all the files
        filename: 'main.js', // Name of the output
        path: path.resolve(__dirname, 'dist'), // Path where the file is to be stored. Tries to find the dist folder as an absolute path, making it a relative path if it can't do that
        clean: true, // Cleans the output directory each time webpack is run so that the output files are always up to date
    },
    devtool: 'eval-source-map', // Add a source map from the bundled code to the development code for correspondence in error messages and debugging
    devServer: {
        watchFiles: [ // Note that bundled JS is automatically watched
            './src/template.html', // Restart the server whenever this file changes.
        ],
    },
    plugins: [ // plugins let you tap into webpack's compilation step, allowing for wider capabilities than a loader (described below).
        new HtmlWebpackPlugin({ // NOTE: There's no need to add a script tag with our entrypoint into the HTML, webpack will add the bundled output as a script tag automatically
            template: './src/template.html', // This can be named whatever (ex. meow-cat.html), just make sure to update webpack accordingly
        }),
    ],
    module: { // 'module' as in the way to get modules from the code. Achieved through loaders. By default webpack only understands JS/JSON and needs to convert other file types into modules that can be used by webpack
        rules: [
            {
                test: /\.css$/i, // Apply this rule to files ending in .css
                use: ['style-loader', 'css-loader'], // Use the appropriate loaders. Note that order matters; the CSS must be read as a string by css-loader, then use style-loader to inject the CSS into the appropriate JS files. Loaders are read by webpack from right to left, i.e. starting from the end.
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, // Apply this rule to all image files
                type: 'asset/resource', // Tell webpack that the above file types are assets to be used in JS
            }
        ],
    },
};