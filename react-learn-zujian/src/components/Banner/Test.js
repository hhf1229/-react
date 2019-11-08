import React, { Component } from 'react'
import Banner from './index'
import src1 from '../../assets/img/1.jpg'
import src2 from '../../assets/img/2.jpg'
import src3 from '../../assets/img/3.jpg'
import src4 from '../../assets/img/4.jpg'
import src5 from '../../assets/img/5.jpg'

export default class Test extends Component {
  render() {
    return (
      <div className='container'>
        <Banner imgSrcs={[src1,src2,src3,src4,src5]} />
      </div>
    )
  }
}
