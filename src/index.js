import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import './css/bootstrap.min.css'
import './css/reset.css'
import './css/index.css'

import reportWebVitals from './reportWebVitals'

import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
