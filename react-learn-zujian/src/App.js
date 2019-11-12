import React, { PureComponent } from 'react'
import FadeTransition from './components/FadeTransition'
import { TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'
export default class App extends PureComponent {
  state = {
    show: [
      { id: uuid(), name: '任务一' },
      { id: uuid(), name: '任务二' }
    ]
  }
  render() {
    return (
      <div>
        <TransitionGroup component='ul'>
          {
            this.state.show.map(t => 
            <FadeTransition key={t.id} timeout={1000}>
              <li>{t.name}
              <button onClick={()=>{
                this.setState({
                  show:this.state.show.filter(it=> it.id !== t.id)
                })
              }}>删除</button>
              </li>
            </FadeTransition>)
          }
        </TransitionGroup>
        <button onClick={() => {
          const name = window.prompt('请输入添加的任务名称')
          this.setState({
            show:[...this.state.show,{id:uuid(),name}]
          })
        }}>添加</button>
      </div>
    )
  }
}


