import React from 'react'

import classNames from 'classnames/bind'
import s from './index.css'
const cn = classNames.bind(s)

import Button from 'Button'

const App = ({
}) => (
  <div className={s.root}>
    <Button {...{ className: s.button }}>Без всего</Button>
    <Button {...{ className: s.button, color: 'orange' }}>Оранжевая</Button>
    <Button {...{ className: s.button, color: 'orange', size: 'small' }}>Маленькая</Button>
    <Button {...{ className: s.button, color: 'orange', rounded: true }}>Круглая</Button>
  </div>
)

export default App
