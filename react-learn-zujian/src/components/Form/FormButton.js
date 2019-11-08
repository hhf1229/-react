import React, { Component } from 'react'
import ctx from './formContext'
export default class FormButton extends Component {
  static contextType = ctx
  render() {
    return (
      <>
        <button onClick={()=>{
          this.context.submit(this.context.formData)
        }}>提交</button>
      </>
    )
  }
}
