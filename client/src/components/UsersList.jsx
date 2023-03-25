import React, { useEffect, useState } from 'react'
import { API } from '../constance'

function UsersList() {
  const [users,setUesrs]=useState(null)
  useEffect(()=>{
    fetch(API+'/users',{
      credentials:'include',
      headers:{
        'Content-Type':'application/json'
      }
    }).then(async res=>{
      const data=await res.json()
      if(!res.ok)
      {
        alert(data.msg)
        return
      }
      setUesrs(data);
    })
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