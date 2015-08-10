var webpack = require("webpack");
module.exports = {
    entry: "./webapp.php",
    output: {
        filename: "webapp.js",
        path: "./build"
    },
    module: {
        loaders: [
            {
                test: /\.php$/,
                loader: "./custom-uniter-loader.js?bootstrapper="+require.resolve("./php_boot.js")
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    },
    _plugins: [
        // Taken from the BIRD3 config
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                properties: true,
                sequences: true,
                dead_code: true,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                booleans: true,
                unused: true,
                loops: true,
                hoist_funs: true,
                cascade: true,
                if_return: true,
                join_vars: true,
                drop_debugger: true,
                unsafe: true,
                hoist_vars: true,
                negate_iife: true,
            },
            mangle: {
                toplevel: true,
                sort: true,
                eval: true
            },
            output: { comments: false }
        })
    ]
}
