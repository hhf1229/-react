import React from 'react'
import * as Page from './Page'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TransitionRoute from './TransitionRoute'

export default function App() {
  return (
    <Router>
      <Page.NavBar></Page.NavBar>
      <div style={{
        width:800,
        height:1000,
        margin:'0 auto',
        textAlign:'center',
        position:'relative'
      }}>
        <TransitionRoute path='/' exact component={Page.Home} />
        <TransitionRoute path='/news' exact component={Page.News} />
        <TransitionRoute path='/personal' exact component={Page.Personal} />
      </div>
    </Router>
  )
}
