import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HeaderBack from '../components/HeaderBack'

import styles from '../css/ProfileScreen.module.css'

import Button from '../components/Button'

import { Link, useNavigate } from 'react-router-dom'
import protect from '../utils/protect'
import { changePasswordDelete } from '../actions/actions'

const ProfileScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  useEffect(() => {
    protect(userLogin, navigate)
    dispatch(changePasswordDelete())
  }, [navigate, userLogin])

  return (
    <>
      <HeaderBack backTo='/home'>Profil</HeaderBack>

      <Link to='/logout'>
        <div className={styles.logoutButton}>
          <img
            src='/img/logout.png'
            alt='logout'
            className={styles.logoutButtonImg}
          ></img>
        </div>
      </Link>

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
      <Link to='/profile/password'>
        <Button>Schimba parola</Button>
      </Link>
    </>
  )
}

export default ProfileScreen
