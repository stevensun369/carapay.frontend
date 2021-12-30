import React from 'react'

import styles from '../css/components/SubmitButton.module.css'

const SubmitButton = ({ value, disabled }) => {
  return (
    <input
      type='submit'
      className={styles.submitButton}
      value={value}
      disabled={disabled}
    />
  )
}

export default SubmitButton
