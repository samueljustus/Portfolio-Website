import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname;
  console.log(location)
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      {isHomePage === "/"  ? null : <Footer />}
    </>
  );
}
