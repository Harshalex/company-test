import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function RequireUser() {
  const LOGIN_KEY = "token";
  const user = localStorage.getItem(LOGIN_KEY);
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
}

export default RequireUser;
