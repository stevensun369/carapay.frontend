import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  GET_BALANCE_REQUEST,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAIL,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAIL,
  USER_LOGOUT,
} from '../constants/constants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }

    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }

    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const balanceReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BALANCE_REQUEST:
      return { loading: true }
    case GET_BALANCE_SUCCESS:
      return {
        loading: false,
        balance: action.payload,
      }
    case GET_BALANCE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const transactionsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_REQUEST:
      return { loading: true }
    case GET_TRANSACTIONS_SUCCESS:
      return {
        loading: false,
        transactions: action.payload,
      }
    case GET_TRANSACTIONS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
