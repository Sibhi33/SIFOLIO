import React, { useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import SideBar from "../components/SideBar";
import Resume from "./Resume";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarWidth, setSidebarWidth] = useState(270); // Default width

  useEffect(() => {
    const savedWidth = localStorage.getItem("sideBarWidth");
    if (savedWidth) {
      setSidebarWidth(parseInt(savedWidth));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sideBarWidth", sidebarWidth.toString());
  }, [sidebarWidth]);

  return (
    <div id="home" className="App flex h-full">
      <div
        className="bg-[#262526] h-full fixed hidden lg:block"
        style={{ width: `${sidebarWidth}px` }}
      >
        <SideBar setWidth={setSidebarWidth} width={sidebarWidth} />
      </div>
      <div className="bg-[#1e1e1e] h-full flex flex-col flex-1">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div
          className="bg-[#424042] h-16 hidden lg:block"
          style={{ paddingLeft: `${sidebarWidth}px` }}
        >
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div
          className="flex-1 overflow-y-auto"
          style={{ paddingLeft: `${sidebarWidth}px` }}
        >
          {activeTab === "home" && (
            <>
              <Header />
              <div className="max-h-screen overflow-y-auto">
                <About />
                <Resume />
                <Contact />
              </div>
            </>
          )}
          {activeTab === "about" && (
            <div className="max-h-screen overflow-y-auto">
              <About />
            </div>
          )}
          {activeTab === "resume" && (
            <div className="max-h-screen overflow-y-auto">
              <Resume />
            </div>
          )}
          {activeTab === "contact" && (
            <div className="max-h-screen overflow-y-auto">
              <Contact />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
