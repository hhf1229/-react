import React, { Component } from 'react'

export default class index extends Component {

  constructor(props){
    super(props)
    this.re = React.createRef()
  }
  handelClick = ()=> {
    
  }
  render() {
    return (
      <div>
          <input type="text" ref={(el)=>{
            console.log('diaoyongl',el)
            this.tex = el
          }} />
          <button onClick={this.handelClick}>聚焦</button>
      </div>
    )
  }
}
