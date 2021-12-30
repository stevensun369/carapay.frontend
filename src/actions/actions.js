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
import { apiURL } from '../env'
import axios from 'axios'

export const register =
  (username, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        `${apiURL}/api/user/register`,
        { username, email, password },
        config
      )

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })

      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      `${apiURL}/api/user/login`,
      { email, password },
      config
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  })

  localStorage.removeItem('userInfo')
}

// get balance
export const getBalance = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_BALANCE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${
          getState().userLogin.userInfo.token
        }`,
      },
    }

    const { data } = await axios.get(
      `${apiURL}/api/transactions/balance`,
      config
    )

    dispatch({
      type: GET_BALANCE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_BALANCE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getTransactions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_TRANSACTIONS_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${
          getState().userLogin.userInfo.token
        }`,
      },
    }

    const { data } = await axios.get(
      `${apiURL}/api/transactions/`,
      config
    )

    // sorting them descending by createdAt
    data.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1
      }
      if (a.createdAt > b.createdAt) {
        return -1
      }
      return 0
    })

    dispatch({
      type: GET_TRANSACTIONS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_TRANSACTIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
