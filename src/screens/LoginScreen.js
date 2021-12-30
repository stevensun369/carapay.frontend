import React, { useState, useEffect } from 'react'

// react redux
import { useDispatch, useSelector } from 'react-redux'

// bootstrap components
import { Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'

// actions
import { login } from '../actions/actions'

// react router dom
import { useNavigate } from 'react-router-dom'

// styles
import styles from '../css/ConnectScreens.module.css'

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch('')
  const navigate = useNavigate('')

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error } = userLogin

  useEffect(() => {
    if (userLogin.userInfo) {
      navigate('/home')
    }
  }, [navigate, userLogin.userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
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
                type='password'
                placeholder='Parola'
                value={password}
                onChange={setPassword}
              />

              {error && <Message variant='danger'>{error}</Message>}

              <SubmitButton value='Conectare' disabled={false} />
            </Form>
          )}
        </div>
      </div>
    </>
  )
}

export default LoginScreen
