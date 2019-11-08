import React, { useState, useEffect } from 'react'
let timer = null;
var ref = React.createRef();
function Move(props) {
  // const [x, setx] = useState(0);
  // const [y, sety] = useState(0);
  let times = 0;/* 用于记录移动的次数*/
  let disX = props.left / 100;
  let disY = props.top / 100;
  useEffect(() => {
    clearInterval(timer);
    const div = ref.current;
    timer = setInterval(() => {
      times++;
      const newLeft = disX * times;
      const newTop = disY * times;
      div.style.left = newLeft + 'px';
      div.style.top = newTop + 'px';
      if (times === 100) {
        clearInterval(timer)
      }
    }, 10)
  })
  return <div ref={ref} style={{
    width: 100,
    height: 100,
    background: 'red',
    position: 'fixed',
    left: 0,
    top: 0
  }}>

  </div>
}
export default function Test() {
  const [value, setvalue] = useState({ x: 0, y: 0 })
  return (
    <div style={{paddingTop:200}}>
      x: <input type="text" value={value.x} onChange={(e) => {
        setvalue({
          ...value, 
          x : e.target.value
        })
      }} />
      y: <input type="text" value={value.y} onChange={(e) => {
        setvalue({
          ...setvalue, 
          y : e.target.value
        })
      }} />
      <Move left={value.x} top={value.y} />
    </div>
  )
}
