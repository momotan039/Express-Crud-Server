import React, { useEffect, useState } from 'react'
import { API } from '../constance'

function UsersList() {
  const [users,setUesrs]=useState(null)
  useEffect(()=>{
    fetch(API+'/users',{
      credentials:'include'
    }).then(res=>res.json())
    .then((data)=>setUesrs(data))
    .catch((err)=>console.log(err.error))
  },[])
  return (
   <div className="users-list">
     <h1>Users List</h1>
    {
      users&&users.map((u,i)=>{
        return <h3 key={i}>user{i+1} : {u.username}</h3>
      })
    }
   </div>
  )
}

export default UsersList