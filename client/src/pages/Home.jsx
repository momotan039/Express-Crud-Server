import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'
function Home() {
    const authContext=useContext(AuthContext)
    const navigator=useNavigate()
    useEffect(()=>{
      debugger
        if(!authContext.user)
        {
            navigator('/signin')
            return
        }
    })

  return (
   <div>
     <h1>Home Page</h1>
     <h3>Welcome Mohammed ♥</h3>
     <Link to='/users'>users</Link>
   </div>
  )
}

export default Home