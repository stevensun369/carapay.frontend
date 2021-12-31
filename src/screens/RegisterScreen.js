import React, { useState, useEffect } from 'react'

// react redux
import { useDispatch, useSelector } from 'react-redux'

// bootstrap components
import { Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'
import HeaderBack from '../components/HeaderBack'

// actions
import { register } from '../actions/actions'

// react router dom
import { useNavigate } from 'react-router-dom'

// styles
import styles from '../css/ConnectScreens.module.css'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const dispatch = useDispatch('')
  const navigate = useNavigate('')

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error } = userLogin

  const [confirmError, setConfirmError] = useState(false)

  useEffect(() => {
    if (userLogin.userInfo) {
      navigate('/home')
    }
  }, [navigate, userLogin.userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password === passwordConfirm) {
      dispatch(register(username, email, password))
      setConfirmError(false)
    } else {
      setConfirmError(true)
    }
  }

  return (
    <>
      <HeaderBack backTo='/welcome'></HeaderBack>

      <div className={styles.mainCard}>
        <div className={styles.mainCardContainer}>
          <div className={styles.logo}></div>
          {loading ? (
            <Loader />
          ) : (
            <Form onSubmit={submitHandler}>
              <Input
                type='email'
                placeholder='Email'
                value={email}
                onChange={setEmail}
              />

              <Input
                type='text'
                placeholder='Nume de utilizator'
                value={username}
                onChange={setUsername}
              />

              <Input
                type='password'
                placeholder='Parola'
                value={password}
                onChange={setPassword}
              />

              <Input
                type='password'
                placeholder='Confirmare Parolă'
                value={passwordConfirm}
                onChange={setPasswordConfirm}
              />

              {error && <Message variant='danger'>{error}</Message>}

              {confirmError && (
                <Message variant='danger'>
                  Parola si confirmarea parolei nu sunt la fel.
                </Message>
              )}

              <SubmitButton value='Conectare' disabled={false} />
            </Form>
          )}
        </div>
      </div>
    </>
  )
}

export default RegisterScreen
