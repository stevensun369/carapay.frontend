import React from 'react'

import styles from '../css/components/HeaderBack.module.css'

import { Link } from 'react-router-dom'

const HeaderBack = ({ children }) => {
  return (
    <div className={styles.header}>
      <Link to='/home'>
        <div className={styles.headerBackButton}>
          <img
            src='/img/backbutton.png'
            alt='back button'
            className={styles.headerBackButtonImg}
          ></img>
        </div>
      </Link>
      <div className={styles.headerBackText}>
        <span className={styles.headerBackTextSpan}>{children}</span>
      </div>
    </div>
  )
}

export default HeaderBack
