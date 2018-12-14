import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './redux/Parent-Component/App'
import * as serviceWorker from './serviceWorker'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store/configureStore'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.Fragment>
        <Route exact path='/' component={props => <App />} />
      </React.Fragment>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
