import React, { Component } from 'react'
import PropTypes from 'prop-types'

class A extends Component {

  static contextTypes = {
    a:PropTypes.number,
    b:PropTypes.string
  }
  render(){
    return <span>这里是A组件中的B组件
      a:{this.context.a}
      <B/>
    </span>
  }
}
B.contextTypes = {
  a:PropTypes.number,
  b:PropTypes.string
}
function B(props,context){
  return <p>
    function B a:{context.a}
  </p>
}

export default class index extends Component {

  static childContextTypes = {
    a:PropTypes.number.isRequired,
    b:PropTypes.string.isRequired,
  }
  getChildContext(){
    return {
      a:123,
      b:'dd'
    }
  };
  
  render() {
    return (
      <div>
        <A/>
      </div>
    )
  }
}
