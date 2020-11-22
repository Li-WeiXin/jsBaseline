var path = require('path');
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, './src/index.js'), //入口文件
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "main.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],

    module :{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','scss-loader']}
        ]
    }
};


