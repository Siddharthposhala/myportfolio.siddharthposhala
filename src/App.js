/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./App.css";
import SecA from "./secA";
import SecB from "./secB";
import React, { useRef, useState, useEffect } from "react";

function App() {
  const home = useRef(null);
  const whoiam = useRef(null);

  const homeClick = () => {
    console.log("homeClick");
    if (home.current) {
      home.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whoiamClick = () => {
    if (whoiam.current) {
      whoiam.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  // ******************************NAVBAR**************************************
  const [isMobile, setIsMobile] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth <= 1250); // Set the breakpoint according to your preference
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const tabLinks = (
    <div className="flex items-center">
      <button
        className="mr-5 py-2 px-3 text-white transition duration-300 ease-in-out navbar-button text-xl "
        onClick={homeClick}
      >
        Home
      </button>
      <button
        onClick={whoiamClick}
        className="mr-4 py-2 px-3 text-white transition duration-300 ease-in-out navbar-button text-xl"
      >
        Who am I
      </button>
      <a
        href=" "
        className="mr-4 py-2 px-3 text-white transition duration-300 ease-in-out navbar-button text-xl"
      >
        Projects
      </a>
      <a
        href=" "
        className="mr-4 py-2 px-3 text-white transition duration-300 ease-in-out navbar-button text-xl"
      >
        Skils
      </a>
      <a
        href=" "
        className="mr-12 py-2 px-3 text-white transition duration-300 ease-in-out navbar-button text-xl"
      >
        Contact
      </a>
    </div>
  );

  const hamburgerMenu = (
    <button
      className="mr-12 py-2 px-5 text-white transition duration-300 ease-in-out hover:text-gray-300 text-xl text-2xl"
      onClick={() => setShowDrawer(!showDrawer)}
    >
      &#9776;
    </button>
  );

  const sideDrawer = (
    <div
      className={`absolute top-0 right-0 h-screen w-1/3 navcolor text-white ${
        showDrawer ? "" : "hidden"
      }`}
    >
      <div className="px-6 py-4">
        <button
          className="mr-12 py-2 px-5 text-white transition duration-300 ease-in-out hover:text-gray-300 text-xl text-3xl"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          &#215;
        </button>
        <a
          href=""
          className="block py-2 px-5 text-white transition duration-300 ease-in-out navbar-button text-xl mr-8"
        >
          Home
        </a>
        <a
          href=" "
          className="block py-2 px-5 text-white transition duration-300 ease-in-out navbar-button text-xl mr-8"
        >
          Who am I
        </a>
        <a
          href=" "
          className="block py-2 px-5 text-white transition duration-300 ease-in-out navbar-button text-xl mr-8"
        >
          Projects
        </a>
        <a
          href=" "
          className="block py-2 px-5 text-white transition duration-300 ease-in-out navbar-button text-xl mr-8"
        >
          Skills
        </a>
        <a
          href=" "
          className="block py-2 px-5 text-white transition duration-300 ease-in-out navbar-button text-xl mr-8"
        >
          Contact
        </a>
      </div>
    </div>
    // ************************************************NAVBAR****************************************************
  );
  return (
    <div>
      <nav className="relative flex items-center justify-between px-6 py-4  text-white navcolor">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-12  mr-2 px-4 py-3 logo">
            Siddharth
          </h1>
          <h1 className="text-2xl font-bold mr-4 logo">Pohala</h1>
        </div>
        {isMobile ? (
          <>
            {hamburgerMenu}
            {sideDrawer}
          </>
        ) : (
          tabLinks
        )}
      </nav>
      <SecA home={home} />
      <SecB whoiam={whoiam} />
    </div>
  );
}

export default App;
