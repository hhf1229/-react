import React from 'react'
import {BrowserRouter as Router,Redirect,Route} from 'react-router-dom'
import loginInfo from './loginInfo'
export default function ProtecedRouter({component:Component,render,children,...rest}) {
  return (
    <Route {...rest} 
    render={values=>{
      if(loginInfo.isLogin){
        return <Component/>
      }else {
        console.log(values.location)
        return <Redirect to={{
          pathname: "/login",
          state: values.location.pathname
        }} />
      }
    }}
    />
  )
}
