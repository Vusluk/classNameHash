import React from 'react'

import classNames from 'classnames/bind'
import s from './index.css'
const cn = classNames.bind(s)

const Button = ({
  color = 'white',
  size = 'middle',
  className,
  rounded = false,
  
  children,
}) => {
  const rootClassName = cn(s.root, s[color], s[size], { rounded }, className)
  return (
    <button className={rootClassName}>
      {children}
    </button>
  )
}

export default Button
