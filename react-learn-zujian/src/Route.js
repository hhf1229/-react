import React, { PureComponent } from 'react'

export default class Route extends PureComponent {
  //封装Route的匹配规则，
  // 参数ctx为上下文的东西，里面有history，location，match的东西
  popei =(ctx)=>{
    // 如果children属性的值不为空，且为函数的时候，直接渲染，否则直接返回渲染
      if(this.props.children !== undefined){
        if( typeof this.props.children === 'function'){
          return this.props.children(ctx)
        }else {
          return this.props.children
        }
      }else {
        // 匹配了
        if(!ctx.match){
          return null
        }
        // 有render函数的时候
        if(this.props.render !== undefined){
          if(typeof this.props.render === 'function'){
            return this.props.render(ctx)
          }
        };
        // 有component的时候
        if(this.props.component !== undefined){
          const Component = this.props.component;
          return <Component {...ctx} />
        }
        return null
      }
  }
  ctxValue = {}
  render() {
    this.ctxValue.history = this.props.history;
    this.ctxValue.location = this.props.history.location;
    this.ctxValue.match = matchPath()
    return <ctx.Consumer>
      {value =>{
        return <ctx.Provider value={this.ctxValue}>

        </ctx.Provider>
      }}
    </ctx.Consumer>
  }
}
