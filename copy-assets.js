const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
    mode: 'development',
    entry: './src/index.tsx', // This entry point is not used, but required by Webpack
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'node_modules/cesium/Source/Assets'),
                    to: 'public/Assets'
                },
                {
                    from: path.join(__dirname, 'node_modules/cesium/Source/Widgets'),
                    to: 'public/Widgets'
                },
                {
                    from: path.join(__dirname, 'node_modules/cesium/Source/ThirdParty'),
                    to: 'public/ThirdParty'
                }
            ]
        })
    ]
};

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err || stats.toString());
    } else {
        console.log('Cesium assets copied successfully.');
    }
});