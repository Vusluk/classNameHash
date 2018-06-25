const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

const server = express()

const NODE_ENV = process.env.NODE_ENV || 'development';
const env = {
  prod: NODE_ENV === 'production',
  dev: NODE_ENV === 'development',
}

if (env.dev) {
  const compiler = webpack(webpackConfig)
  server.use(require("webpack-dev-middleware")(compiler, {
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    },
  }))
  server.use(require("webpack-hot-middleware")(compiler))
}

server.use(express.static(path.resolve(__dirname, '..', 'static')))

const renderPage = () => (`
  <!doctype html>
  <html lang="ru">
    <head>
      <title>VUSLUK DEMO</title>
      <meta charset="utf8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <script async src="/bundle.js"></script>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
`)

server.get('*', (req, res) => {
  res.send(renderPage())
})

server.listen(
  process.env.PORT || 8090,
  () => console.log('-->> SERVER.JS -->> SERVER RUNNING ON PORT ' + (process.env.PORT || 8090))
)
