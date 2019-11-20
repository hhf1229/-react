import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import {BrowserRouter as Router,NavLink,Route} from 'react-router-dom'
export default function App() {
  return <Router>
    <NavLink to='/page1'>页面1</NavLink>
    <NavLink to='/page2'>页面2</NavLink>
    <div>
      <Route path='/page1' component={Page1}></Route>
      <Route path='/page2' component={Page2}></Route>
    </div>
  </Router>
}
