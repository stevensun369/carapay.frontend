import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPeople, addToPeopleDelete } from '../actions/actions'
import Footer from '../components/Footer'
import HeaderHome from '../components/HeaderHome'
import Person from '../components/Person'
import { Link, useNavigate } from 'react-router-dom'

import styles from '../css/PeopleScreen.module.css'
import protect from '../utils/protect'

const PeopleScreen = () => {
  const dispatch = useDispatch('')
  const navigate = useNavigate()

  const people = useSelector((state) => state.people)
  // const { loading, error } = people

  const userLogin = useSelector((state) => state.userLogin)

  useEffect(() => {
    protect(userLogin, navigate)
  }, [navigate, userLogin])

  useEffect(() => {
    dispatch(addToPeopleDelete())
    dispatch(getPeople())
  }, [dispatch])

  return (
    <>
      <HeaderHome />

      {/* people */}
      <div style={{ marginTop: '3vh' }}></div>
      <div className={styles.title}>
        <span className={styles.titleSpan}>Persoane</span>
      </div>
      {people.people ? (
        <>
          <div className={styles.separator}></div>
          {people.people.map((p) => (
            <Person
              username={p.username}
              email={p.email}
              userID={p.userID}
              key={p.userID}
            />
          ))}
        </>
      ) : (
        <div className='nothingToShow'>Nu exista persoane inca</div>
      )}

      <Link to='/people/add'>
        <div className={styles.addToPeopleButton}>
          <span className={styles.addToPeopleButtonSpan}>
            Adauga persoana
          </span>
        </div>
      </Link>
      <Footer screen='people' />
    </>
  )
}

export default PeopleScreen
