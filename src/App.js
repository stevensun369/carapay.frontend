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
import LogoutScreen from './screens/LogoutScreen'
import ProfileScreen from './screens/ProfileScreen'
import AddToPeopleScreen from './screens/AddToPeopleScreen'
import CreatePersonTransactionScreen from './screens/CreatePersonTransactionScreen'
import CreateTransactionScreen from './screens/CreateTransactionScreen'
import IndexScreen from './screens/IndexScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import PasswordChangeScreen from './screens/PasswordChangeScreen'

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
        <Route path='' element={<IndexScreen />} />

        <Route path='/welcome' element={<WelcomeScreen />} />

        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/logout' element={<LogoutScreen />} />

        <Route path='/home' element={<HomeScreen />} />
        <Route path='/people' element={<PeopleScreen />} />
        <Route path='/people/add' element={<AddToPeopleScreen />} />

        <Route
          path='/profile/password'
          element={<PasswordChangeScreen />}
        />
        <Route path='/profile' element={<ProfileScreen />} />

        {/* create transactions */}
        <Route
          path='/send/:userID'
          element={<CreatePersonTransactionScreen />}
        />

        <Route path='/send' element={<CreateTransactionScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
