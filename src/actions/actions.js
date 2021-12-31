import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_ADD_TO_PEOPLE_REQUEST,
  USER_ADD_TO_PEOPLE_SUCCESS,
  USER_ADD_TO_PEOPLE_FAIL,
  USER_ADD_TO_PEOPLE_DELETE,
  GET_BALANCE_REQUEST,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAIL,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAIL,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAIL,
  CREATE_TRANSACTION_DELETE,
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAIL,
  GET_PERSON_REQUEST,
  GET_PERSON_SUCCESS,
  GET_PERSON_FAIL,
  PASSWORD_CHANGE_REQUEST,
  PASSWORD_CHANGE_SUCCESS,
  PASSWORD_CHANGE_FAIL,
  USER_LOGOUT,
  PASSWORD_CHANGE_DELETE,
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

export const makeTransaction =
  (to, message, amount, password) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_TRANSACTION_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getState().userLogin.token}`,
        },
      }

      const { data } = await axios.post(
        `${apiURL}/api/transactions`,
        { to, message, amount, password },
        config
      )

      dispatch({
        type: CREATE_TRANSACTION_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: CREATE_TRANSACTION_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const makeTransactionDelete = () => async (dispatch) => {
  dispatch({
    type: CREATE_TRANSACTION_DELETE,
  })
}

export const addToPeople = (userID) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_ADD_TO_PEOPLE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getState().userLogin.token}`,
      },
    }

    const userIDString = userID.toString()
    const { data } = await axios.post(
      `${apiURL}/api/user/people`,
      { userToAddID: userIDString },
      config
    )

    dispatch({
      type: USER_ADD_TO_PEOPLE_SUCCESS,
      payload: data,
    })

    var ls = JSON.parse(localStorage.getItem('userInfo'))
    ls.token = data.token
    ls.people = data.people

    localStorage.setItem('userInfo', JSON.stringify(ls))
  } catch (error) {
    dispatch({
      type: USER_ADD_TO_PEOPLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const addToPeopleDelete = () => async (dispatch) => {
  dispatch({
    type: USER_ADD_TO_PEOPLE_DELETE,
  })
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
        'Authorization': `Bearer ${getState().userLogin.token}`,
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
        'Authorization': `Bearer ${getState().userLogin.token}`,
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

export const getPeople = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PEOPLE_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getState().userLogin.token}`,
      },
    }

    const { data } = await axios.get(
      `${apiURL}/api/user/people`,
      config
    )

    dispatch({
      type: GET_PEOPLE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_PEOPLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getPerson = (userID) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PERSON_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getState().userLogin.token}`,
      },
    }

    const { data } = await axios.get(
      `${apiURL}/api/user/people/${userID}`,
      config
    )

    dispatch({
      type: GET_PERSON_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_PERSON_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const changePassword =
  (password, newPassword) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PASSWORD_CHANGE_REQUEST,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getState().userLogin.token}`,
        },
      }

      const { data } = await axios.post(
        `${apiURL}/api/user/password`,
        { password, newPassword },
        config
      )

      dispatch({
        type: PASSWORD_CHANGE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PASSWORD_CHANGE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const changePasswordDelete = () => async (dispatch) => {
  dispatch({
    type: PASSWORD_CHANGE_DELETE,
  })
}
