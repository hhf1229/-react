import React from 'react'

export default function WithLog(Comp){

  return class LogWrapper extends React.Component{
    componentDidMount(){
      console.log('组件被创建了')
    }
    componentWillUnmount(){
      console.log('组件被销毁了')
    }
    render(){
      return <Comp/>
    }
  }

}