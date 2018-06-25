import React from 'react'
import { render } from 'react-dom'

import App from 'App'

const container = document.getElementById('root')

console.log('APP', App)

const start = (App) => render(
  <App/>,
  container
)

start(App)

if (module.hot) module.hot.accept('./App/index.js', () => start(require('./App/index.js').default))
