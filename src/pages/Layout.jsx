import React from "react";
import RestHeader from "../components/RestHeader";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
    <RestHeader/>
    <Outlet/>
    </>
  );
};

export default Layout;
