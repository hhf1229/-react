import React from 'react'
import Layout from '../../Layout/index'
import Header from '../../Header/index'
import Menu from '../../Menu'
import { Route } from 'react-router-dom'
import Welcome from '../Welcome'
import StudentList from '../student/StudentList'
import AddStudent from '../student/AddStudent'
import Courses from '../student/Courses'
import AddCourses from '../student/AddCourses'
export default function Student() {
  return (
    <Layout
      header={<Header />}
      aside={<Menu />}
    >
        <Route exact path='/' component={Welcome} />
        <Route exact path='/student' component={StudentList} />
        <Route exact path='/student/add' component={AddStudent} />
        <Route exact path='/courses' component={Courses} />
        <Route exact path='/courses/add' component={AddCourses} />
    </Layout>
  )
}
