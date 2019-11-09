import React,{useState} from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
export default function App() {
  const [visiable, setvisiable] = useState(true)
  return (
    <div>
      <SwitchTransition >
        <CSSTransition timeout={1000}  key={visiable}>
            <h1>{visiable?'title1':'title2'}</h1>
        </CSSTransition>
      </SwitchTransition>
      <button onClick={()=>{
        setvisiable(!visiable)
      }}>切换</button>
    </div>
  )
}
