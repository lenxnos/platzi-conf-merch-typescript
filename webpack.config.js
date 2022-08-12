const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const DotEnv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: '[id].css',
    }),
    new DotEnv(),
    new webpack.DefinePlugin({
      'process.env': {
				REACT_APP_CLIENT_ID: JSON.stringify(process.env.REACT_APP_CLIENT_ID),
				API_KEY: JSON.stringify(process.env.API_KEY),
			},
    }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3005,
  },
};
