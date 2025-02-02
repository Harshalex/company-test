import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function AlreadyLogged() {
  const LOGIN_KEY = "token";
  const user = localStorage.getItem(LOGIN_KEY);
  return <div>{user ? <Navigate to="/" /> : <Outlet />}</div>;
}

export default AlreadyLogged;
