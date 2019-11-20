import React, { PureComponent } from 'react'
import Prompt from './Prompt '
export default class Page2 extends PureComponent {
  state = {
    value: ''
  }
  render() {
    return (
      <div>
        <Prompt when={this.state.value !== ''} message='别乱点，乱点信息就没了'  ></Prompt>
        <textarea value={this.state.value} onChange={e => {
          this.setState({
            value: e.target.value
          })
        
        }} style={{ width: 300, height: 200 }} ></textarea>
      </div>
    )
  }
}
