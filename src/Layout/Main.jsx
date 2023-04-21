import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Welcome from "../Components/Welcome/Welcome";
const Main = () => {
  const [showWlc, setShowWlc] = useState(true);
  setTimeout(() => {
    setShowWlc(false);
  }, 1000);
  return (
    // <div>
    //   {showWlc ? (
    //   <Welcome></Welcome>
    //   ) : (
    //     <div>
    //       <Navbar></Navbar>
    //       <Outlet></Outlet>
    //       <Footer></Footer>
    //     </div>
    //   )}
    // </div>

    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
  );
};

export default Main;
