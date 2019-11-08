import {useState,useEffect} from 'react'
import {getStudents} from '../../services/student'
export default function usePageStudents(page,limit) {
  const [resp, setResp] = useState()
  useEffect(()=>{
    (async ()=>{
      const resp = await getStudents(page,limit);
      setResp(resp);
    })()
  },[page,limit])
  return resp
}
