import React from 'react'
import {CSSTransition} from 'react-transition-group'
import '../../App.css'
index.defaultProps = {
  timeout:3000
}

export default function index(props) {
  function addTransition(node,timeout){
    node.style.transition = `opacity ${timeout}ms`
  }
  function removeTransition(node){
    node.style.transition = ''
  }
  return (
    <CSSTransition {...props} 
    onEnter={node=>addTransition(node,props.timeout)}
    onEntered={node=>removeTransition(node)}
    onExit={node=>addTransition(node,props.timeout)}
    onExited={node=>{
      removeTransition(node);
      props.onExited&&props.onExited()
    }}
    />
  )
}
