import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Personal from './Personal'
import Login from './Login'
import Home from './Home'
import ProtecedRouter from './ProtecedRouter'
export default function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/login">登录页</Link></li>
        <li><Link to="/personal">个人中心</Link></li>
      </ul>
      <Switch>
        <Route path='/login' component={Login} />
        <ProtecedRouter path='/personal' component={Personal} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}
