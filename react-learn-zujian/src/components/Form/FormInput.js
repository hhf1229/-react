import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ctx from './formContext'
export default class FormInput extends Component {
  /* 设置默认属性的值，这样使用者不传递属性也不会报错 */
  static defaultProps = {
    type: 'text' 
  }
  /* 在类组件中，需要使用contextType来得到上下文 */
  static contextType = ctx;
  /* 约束传递的值，这样防止传值错误而不容易找到 */
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }
  render() {
    return (
      <>
      {/* value属性赋值，这样可以把表单元素进行约束，约束可以控制表单的值 */}
        <input
          value={this.context.formData[this.props.name]||""}
          type={this.props.type}
          onChange={e=>{
            this.context.changeFormDate(this.props.name,e.target.value)
          }}
        />
      </>
    )
  }
}
