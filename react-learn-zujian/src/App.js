import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from 'react-router-dom'
export default function App() {
  function A() {
    return <h1>A页面</h1>
  }
  function B() {
    return <h1>B页面</h1>
  }
  function Nav() {
    return <div>
      <NavLink to='/a'>去a页面</NavLink>
      <NavLink to='/b'>去b页面</NavLink>
      <NavLink to='/abc' style={{ marginLeft: 20 }}
      
      >其他页</NavLink>
    </div>
  }
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path='/a' component={A}></Route>
          <Route path='/b' component={B}></Route>
          <Redirect to='/a'></Redirect>
        </Switch>
      </Router>
    </div>
  )
}
