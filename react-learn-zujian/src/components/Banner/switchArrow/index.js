import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  render() {
    return (
      <div className='arrow'>
        <span className='left' onClick={()=>{
          this.props.onChange&&this.props.onChange('left')
        }}>&lt;</span>
        <span className='right' onClick={()=>{
          this.props.onChange&&this.props.onChange('right')
        }}>&gt;</span>
      </div>
    )
  }
}
