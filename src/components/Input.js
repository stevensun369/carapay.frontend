import React from 'react'

import styles from '../css/components/Input.module.css'

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input
