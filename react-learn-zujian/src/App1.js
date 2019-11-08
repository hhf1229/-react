import React, {useState} from 'react'
import useTimer from './components/myHooks/useTimer'
// import useAllStudents from './components/myHooks/useAllStudents'
// import usePageStudents from './components/myHooks/usePageStudents'
// function Test() {
//   const [page, setpage] = useState(1)
//   const stus = usePageStudents(page,5);
//   if(stus){
//     const list = stus.findByPage.map(it => <li key={it.id}>{it.name}</li>)
//     return <ul>
//       {list}
//       <input type="number" value={page} onChange={(e)=>{
//         setpage(e.target.value)
//       }} />
//     </ul>
//   }
//   return null
// }
function Test () {
  useTimer(()=>{
    console.log('hook的副作用')
  },1000);
  return <h1>Test组件</h1>
}
export default function App (){
  const [visiable, setvisiable] = useState(true)
  return <>
    {visiable && <Test/>}
    <button onClick={()=>{
      setvisiable(!visiable)
    }}>显示/隐藏</button>
  </>
}
