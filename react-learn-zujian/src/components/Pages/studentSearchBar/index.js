import React, { PureComponent } from 'react'

export default class StudentSearchBar extends PureComponent {
  constructor(props){
    super(props);
    const def = {
      key:'',
      sex:-1
    }
    this.state = Object.assign({},def,this.props.defaultValue)
  }

  handelChange = e => {
   this.setState({
     sex:+e.target.value
   })
  }
  handleClick = e => {
    if(this.props.onSearch){
      this.props.onSearch(this.state)
    }
  }
  render() {
    return (
      <div>
        按关键字查询：
        <input type="text" value={this.state.key} onChange={e=>this.setState({key:e.target.value})} />
        性别：
        <label ><input checked={this.state.sex === -1} type="radio" name='sex' value={-1} onChange={this.handelChange} />不限</label>
        <label ><input checked={this.state.sex === 0} type="radio" name='sex' value={0} onChange={this.handelChange} />男</label>
        <label ><input checked={this.state.sex === 1} type="radio" name='sex' value={1} onChange={this.handelChange} />女</label>
        <button onClick={this.handleClick}>查询</button>
      </div>
    )
  }
}
