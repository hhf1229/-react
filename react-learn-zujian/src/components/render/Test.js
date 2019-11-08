import React, { PureComponent } from 'react'
import MouseListener from './MouseListener'
export default class Test extends PureComponent {
  render() {
    return (
      <div>
        <MouseListener>
          {mouse =><>
            <div 
        style={{
          position:'absolute',
          backgroundColor:'red',
          width:'100px',
          height:'100px',
          left:mouse.x - 50,
          top:mouse.y - 50
        }} 
 
        >
        </div>
          </>}
        </MouseListener>
      </div>
    )
  }
}

