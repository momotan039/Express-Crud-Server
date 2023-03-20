import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../App'
import { isSignIn } from '../services/Auth'

function Root() {
    const authContext=useContext(AuthContext)
  return (
   <>
   <Outlet></Outlet>
        {
        isSignIn()&&<button onClick={authContext.signout}>Logout</button>
       }
   </>
  )
}

export default Root