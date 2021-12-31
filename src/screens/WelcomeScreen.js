import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../css/WelcomeScreen.module.css'

const WelcomeScreen = () => {
  return (
    <div>
      <div className={styles.footer}>
        <Link to='/register'>
          <div className={styles.footerSection}>
            <div
              style={{ background: 'var(--lightgray)' }}
              className={styles.footerSectionButton}
            >
              <span
                style={{ color: 'var(--black)' }}
                className={styles.footerSectionButtonSpan}
              >
                Inregistrare
              </span>
            </div>
          </div>
        </Link>

        <Link to='/login'>
          <div className={styles.footerSection}>
            <div
              style={{ background: 'var(--black)' }}
              className={styles.footerSectionButton}
            >
              <span
                style={{ color: 'var(--white)' }}
                className={styles.footerSectionButtonSpan}
              >
                Conectare
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default WelcomeScreen
