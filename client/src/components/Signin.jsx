import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { API } from "../constance";
import * as Auth from "../services/Auth";

function Signin() {
  const [user, setUser] = useState({});
  const navigator=useNavigate();
  const authContext=useContext(AuthContext)
  const onChangeInput = () => {
    const filed = event.target;
    setUser({ ...user, [filed.name]: filed.value });
  };

  const clickMe = () => {
    event.preventDefault();

    fetch(API + "/users/signin", {
      method: "POST",
      credentials:'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(async res=>{
        const {user}=await res.json()
        if(res.ok)
        {
          console.log(res);
          authContext.signIn(user)
          setTimeout(() => {
            console.log('after 3 seconds');
            navigator('/')
          }, 3000);
          // const data=jwt.verify(data.token,'myseqtokvery')
        }
        else
        alert(data.msg)
    })
  };

  return (
    <form>
      <h1>SignIn</h1>
      <div className="rows">
        <div className="row">
          <span>UserName:</span>
          <input name="username" onChange={() => onChangeInput()} type="text" />
        </div>
        <div className="row">
          <span>Password:</span>
          <input
            name="password"
            onChange={() => onChangeInput()}
            type="password"
          />
        </div>
      </div>
      <button onClick={clickMe} type="submit">
        SignIn
      </button>
    </form>
  );
}

export default Signin;
