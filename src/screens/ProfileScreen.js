import React from 'react'
import { useSelector } from 'react-redux'

import HeaderBack from '../components/HeaderBack'

import styles from '../css/ProfileScreen.module.css'

import Button from '../components/Button'

const ProfileScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  return (
    <>
      <HeaderBack>Profil</HeaderBack>

      {/* userID */}
      <div className={styles.userID}>
        <div className={styles.userIDTagContainer}>
          <span className={styles.userIDTag}>
            ID-ul de utilizator:
          </span>
        </div>
        <div className={styles.userIDNumberContainer}>
          <span className={styles.userIDNumber}>
            {userLogin.userInfo.userID}
          </span>
        </div>
      </div>
      <div style={{ marginBottom: '5vh' }}></div>

      {/* information */}
      <div className={styles.information}>
        <span className={styles.informationSpan}>
          nume de utilizator: {userLogin.userInfo.username}
        </span>
      </div>
      <div className={styles.information}>
        <span className={styles.informationSpan}>
          email: {userLogin.userInfo.email}
        </span>
      </div>

      {/* change password button */}
      <Button>Schimba parola</Button>
    </>
  )
}

export default ProfileScreen
