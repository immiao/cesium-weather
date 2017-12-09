 const path = require('path');

 module.exports = {
     entry: './index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js',
         sourcePrefix: ''
     },
     module: {
         unknownContextCritical : false,
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
           }, {
             test: /\.css$/,
             loader: 'style-loader!css-loader'
           }, {
             test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg|\.png)/,
             loader: 'file-loader'
           }]
     }
 }
