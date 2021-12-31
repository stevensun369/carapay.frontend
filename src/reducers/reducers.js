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
  PASSWORD_CHANGE_DELETE,
  USER_LOGOUT,
} from '../constants/constants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true }
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        token: action.payload.token,
        people: action.payload.people,
      }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }

    case USER_LOGIN_REQUEST:
      return { ...state, loading: true }
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        token: action.payload.token,
        people: action.payload.people,
      }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }

    case USER_ADD_TO_PEOPLE_REQUEST:
      return { ...state, loading: true }
    case USER_ADD_TO_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        people: action.payload.people,
        addToPeopleFlag: true,
      }
    case USER_ADD_TO_PEOPLE_FAIL:
      return { ...state, loading: false, error: action.payload }
    case USER_ADD_TO_PEOPLE_DELETE:
      return { ...state, addToPeopleFlag: false }

    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const balanceReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BALANCE_REQUEST:
      return { ...state, loading: true }
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
      return { ...state, loading: true }
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

export const peopleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PEOPLE_REQUEST:
      return { ...state, loading: true }
    case GET_PEOPLE_SUCCESS:
      return {
        loading: false,
        people: action.payload,
      }
    case GET_PEOPLE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const createTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION_REQUEST:
      return { ...state, loading: true }
    case CREATE_TRANSACTION_SUCCESS:
      return {
        loading: false,
        transaction: action.payload,
        createTransactionFlag: true,
      }
    case CREATE_TRANSACTION_FAIL:
      return { loading: false, error: action.payload }
    case CREATE_TRANSACTION_DELETE:
      return {
        loading: false,
        error: action.payload,
        createTransactionFlag: false,
      }
    default:
      return state
  }
}

export const personReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PERSON_REQUEST:
      return { ...state, loading: true }
    case GET_PERSON_SUCCESS:
      return {
        ...state,
        loading: false,
        person: action.payload,
      }
    case GET_PERSON_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const passwordChangeReducer = (state = {}, action) => {
  switch (action.type) {
    case PASSWORD_CHANGE_REQUEST:
      return { ...state, loading: true }
    case PASSWORD_CHANGE_SUCCESS:
      return {
        ...state,
        loading: false,
        passwordChangeFlag: true,
      }
    case PASSWORD_CHANGE_FAIL:
      return { loading: false, error: action.payload }
    case PASSWORD_CHANGE_DELETE:
      return { passwordChangeFlag: false }
    default:
      return state
  }
}
