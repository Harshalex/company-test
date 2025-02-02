import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const LOGIN_KEY = "token";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handelLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      localStorage.setItem(LOGIN_KEY, response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-svh">
        <div className="w-1/4  rounded-lg  border-2 border-slate-500 p-5">
          <h1 className="text-3xl text-center py-3 font-bold text-slate-600 pt-3">
            Login
          </h1>
          <form>
            <label
              className="block py-3 px-4 text-xl font-semibold text-slate-700"
              htmlFor="email"
            >
              Enter your Email :{" "}
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block py-2 px-3 rounded-lg  w-full border-2 border-slate-500"
              type="text"
              placeholder="Email"
            />

            <label
              className="block py-3 px-4 text-xl font-semibold text-slate-700"
              htmlFor="password"
            >
              Enter your Password :{" "}
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full py-2 px-4  rounded-lg border-2 border-slate-500"
              type="password"
              placeholder="Password"
            />
            <div className="text-center w-full flex justify-center mx-3 my-4">
              <button
                onClick={handelLogin}
                className=" text-white rounded-xl block py-2 px-4 bg-blue-500 hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      ;
    </>
  );
}

export default Login;
