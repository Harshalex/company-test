import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const LOGIN_KEY = "token";
  const navigate = useNavigate();
  function handelLogout() {
    localStorage.removeItem(LOGIN_KEY);
    navigate("/login");
  }
  return (
    <div className="w-full h-16 bg-slate-700 flex justify-between items-center ">
      <div className="ml-7">
        <h1 className="text-white font-bold text-2xl">ProdWeb</h1>
      </div>
      <div className="mr-10">
        <button
          onClick={handelLogout}
          className="bg-red-500 text-white font-semibold px-6 py-1 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
