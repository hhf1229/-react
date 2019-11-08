import React, { PureComponent } from 'react'
import './index.css'
export default class DivMouse extends PureComponent {

  state={
    x:0,
    y:0
  }
  divRef = React.createRef()
  handleMouseMove = e =>{
    let {top,left}= this.divRef.current.getBoundingClientRect()
    this.setState({
      x:e.pageX - left,
      y:e.pageY - top
    })
    console.log(top,left)
  }
  render() {
    return (
      <div className='box' ref={this.divRef} onMouseMove={this.handleMouseMove}>
          {this.props.children(this.state)}
      </div>
    )
  }
}
