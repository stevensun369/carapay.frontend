import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changePassword } from '../actions/actions'
import { Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'
import HeaderBack from '../components/HeaderBack'
import protect from '../utils/protect'

const PasswordChangeScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const passwordChange = useSelector((state) => state.passwordChange)
  const { loading, error } = passwordChange

  const userLogin = useSelector((state) => state.userLogin)

  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')
  const [confirmError, setConfirmError] = useState(false)

  useEffect(() => {
    protect(userLogin, navigate)
  }, [userLogin, navigate])

  useEffect(() => {
    if (passwordChange.passwordChangeFlag) {
      navigate('/profile')
    }
  }, [passwordChange.passwordChangeFlag, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    if (newPassword === newPasswordConfirm) {
      dispatch(changePassword(password, newPassword))
      setConfirmError(false)
    } else {
      setConfirmError(true)
    }
  }

  return (
    <>
      <HeaderBack backTo='/profile'>Schimba parola</HeaderBack>

      <div style={{ marginTop: '12vh' }}></div>

      {loading ? (
        <Loader />
      ) : (
        <Form onSubmit={submitHandler}>
          <Input
            type='password'
            placeholder='Parola'
            value={password}
            onChange={setPassword}
          />

          <Input
            type='password'
            placeholder='Parola noua'
            value={newPassword}
            onChange={setNewPassword}
          />

          <Input
            type='password'
            placeholder='Confirmare parola noua'
            value={newPasswordConfirm}
            onChange={setNewPasswordConfirm}
          />

          {error && <Message variant='danger'>{error}</Message>}

          {confirmError && (
            <Message variant='danger'>
              Parola si confirmarea parolei nu sunt la fel.
            </Message>
          )}

          <SubmitButton value='Schimba prola' disabled={false} />
        </Form>
      )}
    </>
  )
}

export default PasswordChangeScreen
