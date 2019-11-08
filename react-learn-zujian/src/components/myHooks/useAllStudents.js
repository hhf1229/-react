import {useState,useEffect} from 'react'
import getAllStudents from '../../services/student'
export default function useAllStudents() {
  const [students, setStudents] = useState([])
  useEffect(()=>{
    (async function(){
      const stus = await getAllStudents();
      setStudents(stus)
    })()
  },[])
    return students  
}
