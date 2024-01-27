import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p>Home</p>
      <button
        className="w-[60px] h-[30px] bg-slate-500 shadow-md hover:cursor-pointer rounded-lg"
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
