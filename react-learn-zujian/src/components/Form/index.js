import React, { Component } from 'react'
import FormInput from './FormInput'
import { Provider } from './formContext'
import FormButton from './FormButton'
export default class Form extends Component {
  state = {
    formData: {},/* 用于存放表单的数据 */
    /* 该函数用于用户输入内容的时候修改表单的值 */
    changeFormDate: (name, val) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: val
        }
      })
    },
    // 在Form中提供一个方法用于子组件FormButton点击提交后，可以调用该方法
    submit:(()=>{
      this.props.onSubmit && this.props.onSubmit(this.state.formData)
    })
  }
  render() {
    return (
      <div>
        {/* Form提供上下文context 子组件都可以用 */}
        <Provider value={this.state}>
          {/* 在这里，因为Form组件中包含了子组件，所以可以在Test中不用导入，在这里可以直接使用this.props.children */}
          {this.props.children}
        </Provider>
      </div>
      
    )
  }
}
Form.Input = FormInput
Form.Button = FormButton