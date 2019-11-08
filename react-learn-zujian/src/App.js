import React,{useState} from 'react'
import { CSSTransition } from 'react-transition-group';
import './App.css'

function Com1({visiable}){
  return <CSSTransition in={visiable} timeout={1000}>
    <h1>组件1</h1>
  </CSSTransition>
}
function Com2({visiable}){
  return <CSSTransition in={visiable} timeout={1000}>
    <h1>组件2</h1>
  </CSSTransition>
}
 export default function App() {
  const [show, setShow] = useState(true)
  return (
    <div className='container'>
      <Com1 visiable={show}></Com1>
      <Com2 visiable={!show}></Com2>
      <button onClick={()=>{
        setShow(!show)
      }}>切换</button>
    </div>
  );
}
