 const webpack =require('webpack');
 const path = require('path');

 module.exports = {
     entry: './index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js',
         sourcePrefix: ''
     },
     amd: {
       toUrlUndefined: true
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
             test: /\.(eot|woff2|woff|ttf|png|gif|jpg|jpeg|svg|xml|json)$/,
             loader: 'url-loader'
           }]
     },
     plugins: [
         new webpack.DefinePlugin({
             'process.env':{
                 'API_KEY': JSON.stringify('439e25add613a761a5c0e03d0da5078a')
             }
         })
     ]
 }
