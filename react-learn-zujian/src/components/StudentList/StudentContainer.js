import React,{useState,useEffect}from 'react'
import StudentList from './index'
import {getStudents} from '../../services/student'
export default function StudentContainer() {
  const [student, setstudent] = useState([]);
  useEffect(()=>{
    (async function(){
      const resp =  await getStudents(1,5);
      setstudent(resp.findByPage)
    })()
  },[])
  return (
    <div>
      <StudentList stus={student}/>
    </div>
  )
}
