import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import uuid from 'uuid'
import './App.css'
/* 本节课的练习的目的是设置两个任务1和任务2，同时通过删除按钮来删除，通过使用TransitionGroup来包裹CSSTransition */
export default function App() {
  const [taskList, settaskList] = useState([
    { id: uuid(), name: '任务1' },
    { id: uuid(), name: '任务2' }
  ])
  return (
    <div>
      <TransitionGroup>
        {
          taskList.map(it => (<CSSTransition appear timeout={500} key={it.id}>
            <div>{it.name}
              <button onClick={() => {
                const newTaskList = taskList.filter(t => t.id !== it.id)
                settaskList(newTaskList)
              }}>删除</button>
            </div>
          </CSSTransition>
          ))
        }
      </TransitionGroup>
      <button onClick={()=>{
        const value = window.prompt('请输入一个任务名称')
        settaskList([...taskList,{id:uuid(),name:value}])
      }}>添加一个任务</button>
    </div>
  )
}

