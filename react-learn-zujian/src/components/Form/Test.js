import React, { Component } from 'react'
import Form from './index'
export default class Test extends Component {
  render() {
    return (
      // 首先在Form组件中，写了两个组件，这两个组件一个用来输入内容，一个荣来提交，
      <div>
        <Form onSubmit={datas=>{
          console.log(datas)
        }}>
          <div>
            账号： <Form.Input name="loginId" />
          </div>
          <div>
            密码： <Form.Input name="loginPwd" type="password" />
          </div>
          <Form.Button/>
        </Form>
      </div>
    )
  }
}
