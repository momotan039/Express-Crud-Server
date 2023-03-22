import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import {createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import UsersList from './components/UsersList'
import Root from './pages/Root'
import * as Auth from './services/Auth'
export const AuthContext=createContext()
function App() {
  const [user,setUser]=useState(Auth.getUser())
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
      Auth.SIGNOUT()
      setUser(null)
    },
    signIn:(_user)=>{
      setUser({..._user})
      Auth.SIGNIN(_user)
    },
    user:user
   }}>
     <div className="App">
       <RouterProvider router={router}/>       
    </div>
   </AuthContext.Provider>
  )
}

export default App
