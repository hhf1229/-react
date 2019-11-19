import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RouterGuard from './RouterGuard'
export default function App() {
  function Page1() {
    return <h1>页面1</h1>
  }
  function Page2() {
    return <h1>页面2</h1>
  }
  return (
    <Router >
      <ul>
        <li><Link to='/page1'>页面1</Link></li>
        <li><Link to='page2'>页面2</Link></li>
      </ul>
      <RouterGuard onChange={()=>{console.log('跳转了')}}>
        <Route path='/page1' component={Page1}  />
        <Route path='/page2' component={Page2} />
      </RouterGuard>
    </Router>
  )
}
