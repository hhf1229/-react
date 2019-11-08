import { useEffect } from 'react'

let timer = null
export default function useTimer(func, duration) {
  useEffect(() => {
    timer = setInterval(func, duration)
    return () => {
      clearInterval(timer)
    }
  }, [])


}
