import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const IndexScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const navigate = useNavigate()

  useEffect(() => {
    if (userLogin.userInfo) {
      navigate('/home')
    } else {
      navigate('/welcome')
    }
  })
  return <div></div>
}

export default IndexScreen
