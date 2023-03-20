import React, { useRef, useState } from "react";
import { API } from "../constance";

function Signup() {
  const [user, setUser] = useState({});

  const onChangeInput = () => {
    const filed = event.target;
    setUser({ ...user, [filed.name]: filed.value });
  };

  const clickMe = () => {
    event.preventDefault();

    fetch(API + "/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(async data=>{
        const res=await data.json()
        if(data.status===200)
        alert(res.msg)
        else
        alert(res.msg)
    })
  };

  return (
    <form>
      <h1>Signup</h1>
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
        Signup
      </button>
    </form>
  );
}

export default Signup;
