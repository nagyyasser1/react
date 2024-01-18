import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Components
import App from './App'

// Redux
import { Provider } from 'react-redux'
import { store } from './store/index'
import { CssBaseline } from '@material-ui/core'

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root'),
)
