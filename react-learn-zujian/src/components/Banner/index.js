import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import ImgContainer from './ImgContainer/index'
import src1 from '../../assets/img/1.jpg'
import src2 from '../../assets/img/2.jpg'
import src3 from '../../assets/img/3.jpg'
import src4 from '../../assets/img/4.jpg'
import src5 from '../../assets/img/5.jpg'
import SwitchArrow from './switchArrow/index'
export default class Banner extends Component {
  static defaultProps = {
    width:520,
    height:280,
    imgSrcs:[],
    duration:500,
    autoDuration:3000
  }
  state = {
    curIndex : 0,
    data:[1,2,3,4,5]
  }
  static propTypes = {
    width:PropTypes.number.isRequired, /* 图片宽度 */
    height:PropTypes.number.isRequired, /* 图片高度 */
    imgSrcs:PropTypes.arrayOf(PropTypes.string).isRequired,
    duration:PropTypes.number.isRequired,
    autoDuration:PropTypes.number
  }
  /* 在组件中，要想拿到另外的组件的属性方法，需要通过ref的方式拿到 */
  imgContainerRef = (el)=>{
    this.ImgContainer = el
  }
  handelClick = (index)=>{
      this.ImgContainer.switchTo(index)
  }
  handelChange = (info) => {
    var cur = this.state.curIndex
    if(info === 'left'){
      // console.log(1)
      cur--;
      if(cur < 0){
        cur = this.props.imgSrcs.length - 1
      }
    }else if(info === 'right'){
        cur++;
        if(cur>this.props.imgSrcs.length - 1){
          cur = 0
        }
    }
    // console.log(cur)
    this.setState({
      curIndex:cur
    })
    this.ImgContainer.switchTo(cur)
    // console.log(this.curIndex)
  }
  render() {
    const arr = this.state.data.map((item,index)=><span index={index} key={index} onClick={()=>{
      console.log(index)
    }}>{item}</span>)
    return (
      <div className='banner-container'style={{
        width:this.props.width,
        height:this.props.height
      }}>
        {/* 因为按照模块化的开发思想，尽量把组件细化，在这里可以来个组件，它的功能是有一个容器包裹所有的图片 */}
        <ImgContainer 
        ref={this.imgContainerRef}
        duration={this.props.duration}
        imgSrcs = {[src1,src2,src3,src4,src5]}
        imgWidth={this.props.width}
        imgHeight={this.props.height}
        />
        <SwitchArrow onChange={this.handelChange}/>
        {arr}
      </div>
    )
  }
}
