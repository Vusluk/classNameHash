const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'development';
const env = {
  prod: NODE_ENV === 'production',
  dev: NODE_ENV === 'development',
}

module.exports = {
  mode: NODE_ENV,
  entry: env.prod ? './src/index' : [
    `webpack-hot-middleware/client`,
    'babel-polyfill',
    // 'react-hot-loader/patch',
    './src/index',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
      },
      { test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: env.dev ? '[folder]_[local]--[hash:base64:5]' : '[hash:base64:14]',
              importLoaders: 1
            }
          },
          // { loader: 'postcss-loader', options: { syntax: 'sugarss' } },
        ],
      }
    ],
  },
  plugins: env.dev ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ] : [],
}
