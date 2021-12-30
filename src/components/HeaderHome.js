import React from 'react'

// styles
import styles from '../css/components/HeaderHome.module.css'

// react router dom
import { Link } from 'react-router-dom'

const HeaderHome = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to='/profile'>
          <div className={styles.headerProfile}>
            <img
              src='/img/profile-user.png'
              alt='user profile'
              className={styles.headerProfileImg}
            ></img>
          </div>
        </Link>
      </div>
      <div className={styles.space}></div>
    </>
  )
}

export default HeaderHome
