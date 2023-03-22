import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'
function Home() {
    const authContext=useContext(AuthContext)
    const navigator=useNavigate()
    const user= authContext.user

    useEffect(()=>{
      if(!user)
      {
        debugger
          navigator('/signin')
          return
      }
    })

  return (
   <div>
     <h1>Home Page</h1>
     {
      user&& <h3>Welcome {user.username} ♥</h3>
     }
   </div>
  )
}

export default Home