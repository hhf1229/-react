import React from 'react'
import loginInfo from './loginInfo'
export default function Login(props) {
  return (
    <div>
      <h1>登录授权页</h1>
      <p>该页面仅作测试，点击下方按钮即登录成功</p>
      <button onClick={() => {
        loginInfo.login();
        console.log(props.location)
        if (props.location.state) {
          props.history.push(props.location.state);
        } else {
          props.history.push("/");
        }
      }}>登录</button>
    </div>
  )
}
