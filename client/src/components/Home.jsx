import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigator=useNavigate()
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(!token)
        {
            navigator('/signin')
            return
        }
    },[])

  return (
   <div>
     <h1>Home Page</h1>
     <h3>Welcome Mohammed ♥</h3>
     <Link to='/users'>users</Link>
   </div>
  )
}

export default Home