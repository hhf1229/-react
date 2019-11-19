import React,{ PureComponent } from 'react'
import { withRouter,BrowserRouter as Router } from 'react-router-dom'
class RouterGuard extends PureComponent {
  componentDidMount() {

    //  添加一个监听
    this.unListen = this.props.history.listen(() => {
      if (this.props.onChange) {
        this.props.onChange()
      }
      this.unBlock = this.props.history.block(() => {
        console.log('添加一个阻塞')
      })
    })
  }
  componentWillUnmount() {
    this.unListen()
  }
  handleBefor= ()=>{

  }
  render() {
    return <Router getUserConfirmation={this.handleBefor}>
      {this.props.children}
    </Router>
  }
}
export default withRouter(RouterGuard)