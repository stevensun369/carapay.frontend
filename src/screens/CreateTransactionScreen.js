import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { makeTransaction } from '../actions/actions'

import HeaderBack from '../components/HeaderBack'
import { Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'

// import styles from '../css/CreateTransactionScreen.module.css'
import protect from '../utils/protect'

const CreateTransactionScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [to, setTo] = useState('')
  const [message, setMessage] = useState('')
  const [amount, setAmount] = useState('')
  const [password, setPassword] = useState('')

  const createTransaction = useSelector(
    (state) => state.createTransaction
  )
  const { loading, error } = createTransaction

  const userLogin = useSelector((state) => state.userLogin)

  useEffect(() => {
    protect(userLogin, navigate)
  })

  useEffect(() => {
    if (createTransaction.createTransactionFlag) {
      navigate('/home')
    }
  }, [navigate, createTransaction.createTransactionFlag])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(makeTransaction(to, message, amount, password))
  }
  return (
    <>
      <HeaderBack backTo='/home'>Trimite bani</HeaderBack>

      <div style={{ marginTop: '12vh' }}></div>

      {loading ? (
        <Loader />
      ) : (
        <Form onSubmit={submitHandler}>
          <Input
            type='number'
            placeholder='Catre'
            value={to}
            onChange={setTo}
          />

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

export default CreateTransactionScreen
