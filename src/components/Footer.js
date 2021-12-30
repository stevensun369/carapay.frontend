import React from 'react'

import styles from '../css/components/Footer.module.css'

import { Link } from 'react-router-dom'

const Footer = ({ screen }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <Link to='/home'>
          <div className={styles.footerSectionIcon}>
            {screen === 'home' ? (
              <img
                src='/img/home-selected.png'
                alt='home icon selected'
                className={styles.footerSectionIconHomeImg}
              />
            ) : (
              <img
                src='/img/home-unselected.png'
                alt='home icon unselected'
                className={styles.footerSectionIconHomeImg}
              />
            )}
          </div>
        </Link>
      </div>

      <div className={styles.footerSection}>
        <Link to='/people'>
          <div className={styles.footerSectionIcon}>
            {screen === 'people' ? (
              <img
                src='/img/people-selected.png'
                alt='people icon selected'
                className={styles.footerSectionIconPeopleImg}
              />
            ) : (
              <img
                src='/img/people-unselected.png'
                alt='people icon unselected'
                className={styles.footerSectionIconPeopleImg}
              />
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer
