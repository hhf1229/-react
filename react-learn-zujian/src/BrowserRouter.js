import React, { PureComponent } from 'react'
import { createContext } from 'react'
import { createBrowserHistory } from 'history'
import {matchPath} from './react-router/pathMatch'
export default class BrowserRouter extends PureComponent {
  history = createBrowserHistory()
  ctx = createContext()
  state = {
    location:this.history.location
  }
 ctxValue = {
     
  }
  render() {
    this.ctxValue.history = this.history;
    this.ctxValue.location = this.history.location;
    this.ctxValue.match = matchPath('/',this.state.location.pathname)
    return <Router >
      <ctx.Provider value={ctxValue} >
          {this.props.children}
      </ctx.Provider>
    </Router>
  }
}
