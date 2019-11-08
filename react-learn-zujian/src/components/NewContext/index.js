import React, { Component } from 'react'
const ctx1 = React.createContext()
const ctx2 = React.createContext()
class A extends Component {
  static contextType = ctx1
  render() {
    return <ctx2.Provider value={{
      a:789,
      b:'hello'
    }}>
     <ctx1.Consumer>{(value)=><>a:{value.a} b:{value.b}</>}</ctx1.Consumer>
        <B />
    </ctx2.Provider>
  }
}
function B() {
   
  return <>
        <ctx1.Consumer>{(value)=><p>'这里用到了ctx1' a:{value.a} b:{value.b}</p> }</ctx1.Consumer>
        <ctx2.Consumer>{(value)=><p>'这里用到了ctx2' a:{value.a} b:{value.b}</p> }</ctx2.Consumer>
  </>
}
export default class index extends Component {
  state = {
    a: 123,
    b: '321'
  }
  render() {
    return (
      <ctx1.Provider value={this.state}>
        <div>
          <A />
        </div>
      </ctx1.Provider>
      
    )
  }
}
