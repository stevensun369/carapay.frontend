import React from 'react'
import Footer from '../components/Footer'
import HeaderHome from '../components/HeaderHome'
import Person from '../components/Person'

import styles from '../css/PeopleScreen.module.css'

const PeopleScreen = () => {
  return (
    <>
      <HeaderHome />

      {/* people */}
      <div style={{ marginTop: '3vh' }}></div>
      <div className={styles.title}>
        <span className={styles.titleSpan}>Persoane</span>
      </div>
      <div className={styles.separator}></div>
      <Person
        username='stevensun'
        email='stevensun@gmail.com'
        userID='123456'
      />

      <Person
        username='stevensun'
        email='stevensun@gmail.com'
        userID='123456'
      />

      <Person
        username='stevensun'
        email='stevensun@gmail.com'
        userID='123456'
      />

      <Footer screen='people' />
    </>
  )
}

export default PeopleScreen
