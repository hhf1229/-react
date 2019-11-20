import React from 'react'
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
export default function App() {
  function Page1(){
    return <h1>页面1</h1>
  }
  function Page2(){
    return <h1>页面2</h1>
  }
  return <Router>
      <NavLink to='/page1'>去页面1</NavLink>
      <NavLink to='/page2'>去页面2</NavLink>
    <Route path='/page1' component={Page1}></Route>
    <Route path='/page2' component={Page2}></Route>
  </Router>
}

