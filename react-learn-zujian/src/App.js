import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default function App() {
  function User() {
    return <div>
      <h1>用户界面</h1>
      <Link to='/user/updata'>去更新页面</Link>
      <Link to='/user/info'>去信息页面</Link>
      <div style={{
        width: 500,
        height: 500,
        border: '1px solid black',
        background: 'lightblue',
        margin: '0 auto'
      }}>
          <Route path='/user/updata'  component={UserUpdata} />
        <Route path='/user/info'  component={UserInfo} />
      </div>
    </div>
  }
  function UserUpdata() {
    return <h1>修改信息</h1>
  }
  function UserInfo() {
    return <h1>学生信息</h1>
  }
  return (
    <Router>
      <Route to='/user' exact component={User} />
    </Router>
  )
}
