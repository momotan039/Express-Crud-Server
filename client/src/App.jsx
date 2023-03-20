import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import UsersList from './components/UsersList'
import { isSignIn, SIGNOUT } from './services/Auth'
import Root from './components/Root'

export const AuthContext=createContext()
function App() {
  const [user,setUser]=useState({})
  const router=createBrowserRouter([
   {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/users',
        element:<UsersList/>
      }
    ]
   }
  ])  
  return (
   <AuthContext.Provider value={{
    signout:()=>{
      SIGNOUT()
      setUser(null)
    }
   }}>
     <div className="App">
       <RouterProvider router={router}/>       
    </div>
   </AuthContext.Provider>
  )
}

export default App
