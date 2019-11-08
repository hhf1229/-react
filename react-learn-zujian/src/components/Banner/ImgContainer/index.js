import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class ImgContainer extends Component {

  static defaultProps = {
    imgWidth: 520,
    imgHeight: 280,
    imgArr: []
  }
  tick = 16
  timer = null;
  /* 在这个组件中，不仅仅是作为一个容器，该容器还可以通过改变容器的margin-left的值 在该组件中，我们不用去想其他组件的功能，只需要想好怎么实现切换就行了*/
  switchTo(index) {
    if (index < 0) {
      index = 0
    } else if (index > this.props.imgSrcs.length - 1) {
      index = this.props.imgSrcs.length - 1
    }
    const targetLeft = -index * this.props.imgWidth;
    // this.div.style.marginLeft = targetLeft + 'px'
    let curLeft = parseInt(window.getComputedStyle(this.div).marginLeft);
    let total = parseInt(targetLeft - curLeft);
  
    const times = parseInt(this.props.duration / this.tick)
    let dis = parseInt(total/times)
    let curTimes = 0
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      curTimes++;
      curLeft += dis;
      this.div.style.marginLeft = curLeft + 'px'
      if (curTimes === times) {
        this.div.style.marginLeft = targetLeft + "px";
        clearInterval(this.timer);
      }
    }, this.tick)
  }
  containerRef = (el) => {
    this.div = el;
    // console.log(this.div,el)
  }
  static propTypes = {
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired
  }
  render() {
    const img = this.props.imgSrcs.map((src, index) => <img src={src} key={index} alt='' style={{
      width: this.props.imgWidth,
      height: this.props.imgHeight,
      float: 'left'
    }} />)
    return (
      <div
        ref={this.containerRef}
        style={{
          width: this.props.imgSrcs.length * this.props.imgWidth,
          height: this.props.imgHeight,
        }}>
        {img}
      </div>
    )
  }
}
