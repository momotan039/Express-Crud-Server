import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../constance";
import { SIGNIN } from "../services/Auth";

function Signin() {
  const [user, setUser] = useState({});
  const navigator=useNavigate();

  const onChangeInput = () => {
    const filed = event.target;
    setUser({ ...user, [filed.name]: filed.value });
  };

  const clickMe = () => {
    event.preventDefault();

    fetch(API + "/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(async res=>{
        const data=await res.json()
        if(res.ok)
        {
          SIGNIN(data.token)
          // const data=jwt.verify(data.token,'myseqtokvery')
          navigator('/')
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
