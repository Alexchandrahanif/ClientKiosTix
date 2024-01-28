import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Titik, Vector, Wanita } from "../assets";
import { Input, Space } from "antd";
import CardBook from "../components/CardBook";
const { Search } = Input;

const HomePage = () => {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const navigate = useNavigate();

  const [typeTombol, setTypeTombol] = useState("LOGOUT");

  const loginHandle = (type) => {
    if (type == "LOGIN") {
      setTypeTombol("LOGOUT");
      navigate("/login");
    } else {
      navigate("/");
      localStorage.clear();
      setTypeTombol("LOGIN");
    }
  };
  useEffect(() => {}, [setTypeTombol]);
  return (
    <div className="w-full px-36">
      {/* NAVBAR */}
      <div className="w-full h-[50px] flex justify-between px-5 py-2 bg-slate-300 ">
        <div className="w-[50%] h-full flex items-center">
          <p className="font-semibold">MYBOOK</p>
        </div>
        <div className="w-[50%] h-full flex justify-end">
          {localStorage.getItem("authorization") ? (
            <button
              className="px-2 py-1 bg-slate-300 rounded-md font-semibold hover:cursor-pointer hover:bg-slate-400 text-[12px]"
              onClick={() => {
                loginHandle("LOGOUT");
              }}
            >
              {typeTombol}
            </button>
          ) : (
            <button
              className="px-2 py-1 bg-slate-300 rounded-md font-semibold hover:cursor-pointer hover:bg-slate-400 text-[12px]"
              onClick={() => {
                loginHandle("LOGIN");
              }}
            >
              {typeTombol}
            </button>
          )}
        </div>
      </div>

      {/* SECTION HERO */}
      <div className="w-full flex justify-between">
        <div className="w-full h-[300px] bg-slate-200 flex flex-col justify-center items-center gap-2 ">
          <p className="text-[40px] font-bold leading-10">
            READ AND ADD YOUR INSIGHT
          </p>
          <p className="text-[14px]">
            find your favorite book and read it here for free
          </p>

          <Search
            placeholder="search your book"
            onSearch={onSearch}
            style={{
              width: 400,
            }}
          />
        </div>
      </div>

      {/* BOOK */}
      <div className="w-full flex justify-between items-center flex-wrap gap-2 px-3 py-5 bg-slate-50">
        <CardBook  rating={2}/>
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
      </div>
    </div>
  );
};

export default HomePage;
