import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useParams, useNavigate } from 'react-router-dom'

import { makeTransaction, getPerson } from '../actions/actions'

import HeaderBack from '../components/HeaderBack'
import { Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'

import styles from '../css/CreateTransactionScreen.module.css'
import protect from '../utils/protect'

const CreatePersonTransactionScreen = () => {
  const { userID } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [message, setMessage] = useState('')
  const [amount, setAmount] = useState('')
  const [password, setPassword] = useState('')

  const person = useSelector((state) => state.person)
  const { loading, error } = person

  const createTransaction = useSelector(
    (state) => state.createTransaction
  )

  const userLogin = useSelector((state) => state.userLogin)

  useEffect(() => {
    protect(userLogin, navigate)
  }, [userLogin, navigate])

  useEffect(() => {
    dispatch(getPerson(userID))
  }, [dispatch, userID])

  useEffect(() => {
    if (createTransaction.createTransactionFlag) {
      navigate('/home')
    }
  }, [navigate, createTransaction.createTransactionFlag])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(makeTransaction(userID, message, amount, password))
  }
  return (
    <>
      {person.person && (
        <HeaderBack backTo='/people'>
          Trimite bani lui {person.person.username}
        </HeaderBack>
      )}

      <div style={{ marginTop: '10vh' }}></div>

      {person.person && (
        <>
          <div className={styles.personInfo}>
            <div className={styles.personInfoData}>
              <span className={styles.personInfoDataSpan}>
                email: {person.person.email}
              </span>
            </div>

            <div className={styles.personInfoData}>
              <span className={styles.personInfoDataSpan}>
                ID utilizator: {person.person.userID}
              </span>
            </div>
          </div>
        </>
      )}

      {loading ? (
        <Loader />
      ) : (
        <Form onSubmit={submitHandler}>
          <Input
            type='textbox'
            placeholder='Mesaj'
            value={message}
            onChange={setMessage}
          />

          <Input
            type='number'
            placeholder='Valoare'
            value={amount}
            onChange={setAmount}
          />

          <Input
            type='password'
            placeholder='Parola'
            value={password}
            onChange={setPassword}
          />

          {error && <Message variant='danger'>{error}</Message>}

          <SubmitButton value='Trimite' disabled={false} />
        </Form>
      )}
    </>
  )
}

export default CreatePersonTransactionScreen
