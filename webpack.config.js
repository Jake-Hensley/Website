const { timeStamp } = require('console');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env','@babel/preset-typescript'],}
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
  mode: "development",
};