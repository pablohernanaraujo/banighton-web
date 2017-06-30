var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/main.js',
    output:{
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets: ['es2015','react']
                }
            }
        ]
    }
}

/*
 ,
 resolve: {
 extensions: ['', '.js', '.jsx'],
     alias: {
     'react$': path.join(__dirname, 'node_modules', 'react','build','react.min.js'),
     'react-dom$': path.join(__dirname, 'node_modules', 'react-dom','build','react-dom.min.js')
     }
 }

 */