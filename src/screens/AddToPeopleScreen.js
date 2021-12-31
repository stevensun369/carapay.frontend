import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addToPeople } from '../actions/actions'

import HeaderBack from '../components/HeaderBack'

import protect from '../utils/protect'

// bootstrap components
import { Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'

const AddToPeopleScreen = () => {
  const [userID, setUserID] = useState('')

  const dispatch = useDispatch('')
  const navigate = useNavigate('')

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error } = userLogin

  useEffect(() => {
    protect(userLogin, navigate)
  }, [userLogin, navigate])

  useEffect(() => {
    if (userLogin.addToPeopleFlag) {
      navigate('/people')
    }
  }, [navigate, userLogin.addToPeopleFlag])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addToPeople(userID))
  }
  return (
    <>
      <HeaderBack backTo='/people'>Adauga persoana</HeaderBack>

      <div style={{ marginTop: '15vh' }}></div>
      {/* actual form */}
      {loading ? (
        <Loader />
      ) : (
        <Form onSubmit={submitHandler}>
          <Input
            type='number'
            placeholder='ID-ul utilizatorului'
            value={userID}
            onChange={setUserID}
          />

          {error && <Message variant='danger'>{error}</Message>}

          <SubmitButton value='Adauga' disabled={false} />
        </Form>
      )}
    </>
  )
}

export default AddToPeopleScreen
