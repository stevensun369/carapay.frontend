import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'

// import actions
import { getBalance, getTransactions } from './actions/actions'

// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import PeopleScreen from './screens/PeopleScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'

const App = () => {
  const dispatch = useDispatch('')

  const userLogin = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userLogin.userInfo) {
      dispatch(getBalance())
      dispatch(getTransactions())
    }
  }, [dispatch, userLogin.userInfo])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/people' element={<PeopleScreen />} />

        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/login' element={<LoginScreen />} />

        <Route path='/profile' element={<ProfileScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
