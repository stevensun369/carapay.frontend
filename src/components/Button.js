import React from 'react'

import styles from '../css/components/Button.module.css'

const Button = ({ children }) => {
  return (
    <div className={styles.button}>
      <span className={styles.buttonSpan}>{children}</span>
    </div>
  )
}

export default Button
