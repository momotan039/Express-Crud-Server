import React, { useContext, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import * as Auth from "../services/Auth";

function Root() {
  const authContext = useContext(AuthContext);
  const navigator = useNavigate();

  return (
    <>
      {authContext.user && (
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </nav>
        </header>
      )}
      <Outlet></Outlet>
      {Auth.isSignIn() && (
        <button
          onClick={() => {
            authContext.signout();
            navigator("/signin");
          }}
        >
          Logout
        </button>
      )}
    </>
  );
}

export default Root;
