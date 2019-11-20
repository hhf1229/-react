import React, { PureComponent } from 'react'

export default class Route extends PureComponent {

  popei =(ctx)=>{
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
        if(this.props.render !== undefined){
          if(typeof this.props.render === 'function'){
            return this.props.render(ctx)
          }
        };
        if(this.props.component !== undefined){
          const Component = this.props.component;
          return <Component {...ctx} />
        }
        return null
      }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
