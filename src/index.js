import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'
import { HashRouter, Route, Switch } from 'react-router-dom'

import My from './views/my'
import Account from './views/account'
import Wallet from './views/wallet'
import Form from './views/form'

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={My} />
      <Route exact path='/account' component={Account} />
      <Route exact path='/wallet' component={Wallet} />
      <Route exact path='/form' component={Form} />
    </Switch>
  </HashRouter>,
  document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
