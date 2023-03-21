import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'
import * as Auth from '../services/Auth'

function Root() {
    const authContext=useContext(AuthContext)
  const navigator=useNavigate()
  return (
   <>
   <h1>user:{authContext.user?true:false}</h1>
   <Outlet></Outlet>
        {
        Auth.isSignIn()&&<button onClick={()=>{
          authContext.signout()
          navigator('/signin')
        }}>Logout</button>
       }
   </>
  )
}

export default Root