import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  balanceReducer,
  createTransactionReducer,
  passwordChangeReducer,
  peopleReducer,
  personReducer,
  transactionsReducer,
  userLoginReducer,
} from './reducers/reducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  balance: balanceReducer,
  transactions: transactionsReducer,
  people: peopleReducer,
  createTransaction: createTransactionReducer,
  person: personReducer,
  passwordChange: passwordChangeReducer,
})

const userFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

let userFromStorageInfo
let userFromStorageToken
let userFromStoragePeople

if (userFromStorage) {
  userFromStorageInfo = {
    email: userFromStorage.email,
    username: userFromStorage.username,
    userID: userFromStorage.userID,
  }
  userFromStorageToken = userFromStorage.token
  userFromStoragePeople = userFromStorage.people
}

const initialState = {
  userLogin: {
    userInfo: userFromStorageInfo,
    token: userFromStorageToken,
    people: userFromStoragePeople,
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
