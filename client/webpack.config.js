 const path = require('path');

 module.exports = {
     entry: './index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader!shebang-loader'
           }, {
             test: /\.css$/,
             loader: 'style-loader!css-loader'
           }, {
             test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/,
             loader: 'file-loader'
           }]
     }
 }
