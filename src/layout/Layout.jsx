import React from "react";
import { Outlet } from "react-router-dom";
import Nabvar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex ">
      <div className="w-screen h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
