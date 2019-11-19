import React from 'react'
import {  NavLink } from 'react-router-dom'
export function NavBar() {
  return (
    <div style={{
      width: 800,
      height: 50,
      background: 'lightblue',
      margin: '0 auto',
      textAlign: 'center',
      fontSize: '1.3rem',
      lineHeight: '50px'
    }}>
      <NavLink to='/' style={{ margin: '0 10px', textDecoration: 'none' }} >首页</NavLink>
      <NavLink to='/news' style={{ margin: '0 10px', textDecoration: 'none' }} >新闻页</NavLink>
      <NavLink to='/personal' style={{ margin: '0 10px', textDecoration: 'none' }} >个人中心</NavLink>
    </div>
  )
}
export function Home() {
  return <div style={{ width:'100%', height:'100%',background:'yellowgreen',position:'absolute',left:0,top:0}} className='home'>
    <h1 style={{ margin: 0 }}>首页</h1>
  </div>
}
export function News() {
  return <div style={{ width:'100%', height:'100%',background:'lightpink',position:'absolute',left:0,top:0}}>
    <h1 style={{ margin: 0 }}>新闻页</h1>
  </div>
}
export function Personal() {
  return <div style={{ width:'100%', height:'100%',background:'yellow',position:'absolute',left:0,top:0}}>
    <h1 style={{ margin: 0 }}>个人中心</h1>
  </div>
}


