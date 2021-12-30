import React from 'react'

import { Link } from 'react-router-dom'

import styles from '../css/components/Person.module.css'

const Person = ({ username, email, userID }) => {
  return (
    <>
      <div className={styles.person}>
        <div className={styles.personInfo}>
          <div className={styles.personData}>
            <div className={styles.personDataSpan}>{username}</div>
          </div>

          <div className={styles.personData}>
            <div className={styles.personDataSpan}>{email}</div>
          </div>

          <div className={styles.personUserID}>
            <div className={styles.personUserIDSpan}>{userID}</div>
          </div>
        </div>

        <Link to={`/send/${userID}`}>
          <div className={styles.personSendButton}>
            <span className={styles.personSendButtonSpan}>
              Trimite
            </span>
          </div>
        </Link>
      </div>
      <div className={styles.separator}></div>
    </>
  )
}

export default Person
