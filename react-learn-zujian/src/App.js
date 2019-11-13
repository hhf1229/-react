import React from 'react'
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import Login from './components/Pages/Login/index'
import Admin from './components/Pages/Admin/index'
export default function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={Admin} />
      </Switch>
    </Router>
 )
}

