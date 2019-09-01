const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './lib/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin([
            { from: 'manifest.json', to: './' }
        ])
    ],
    watch: true,
    mode: 'production'
};
