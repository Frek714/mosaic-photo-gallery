import React, { Fragment, useEffect, useRef, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Test from "./utils/Test";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import WhoIam from "./pages/WhoIam";
import Page4 from "./pages/Socials";
import Page5 from "./pages/Page5";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Socials from "./pages/Socials";

function App() {
  const location = window.location.pathname;

  useEffect(() => {
    console.log(location);
    if (location === "/") {
      window.location.href = "/home";
    }
  }, []);

  return (
    <div className="App">
      <div className="background-custom bg-image mt-20" />
      <BrowserRouter basename={"/"}>
        {/* Navbar */}
        <Fragment>
          <div
            className={`${
              location.toLowerCase().includes("home") ? "hidden" : ""
            } h-20 w-full fixed top-0 box-glassed-navbar z-[2]`}
          />
          <div className={`h-20 w-full bg-image opacity-75 fixed top-0 z-[2]`} />
        </Fragment>
        <Hero />

        <Routes>
          {/* <Route exact path="/" render={() => <Navigate to="/dashboard" replace={true} />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/who-i-am" element={<WhoIam />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/buy" element={<Page5 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
