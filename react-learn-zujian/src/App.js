import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//  访问/a路径的时候，显示组件A
function A() {
  return <h1>组件A</h1>
}
//  访问/b路径的时候，显示组件B
function B() {
  return <h1>组件B</h1>
}
//  访问/c路径的时候，显示组件C
function C() {
  return <h1>组件C
        <Route path='/abc' component={D} />
  </h1>
}
function D() {
  return <span>组件D</span>
}
export default function App() {
  return (
    <BrowserRouter>

        <Route path='/a' component={A}>
          <div>这是必定显示的内容</div>
        </Route>
        <Route path='/b' component={B} />
        <Route component={C} />

    </BrowserRouter>
  )
}

