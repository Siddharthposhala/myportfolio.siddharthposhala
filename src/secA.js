/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import profile from "./profile.jpg";
import React, { useState, useEffect } from "react";

const SecA = ({ home }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth <= 1250); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    handleWindowResize();

    const handleResize = () => {
      handleWindowResize();
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="s-home" ref={home}>
      {isMobile ? (
        <div className="container flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-rows-2 place-items-center">
            <div className="mr-20 mb-20 profile-container">
              <div className="mr-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-white">
                <div className="text-lg">I am</div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-medium mb-3 mt-3 max-w-lg">
                  Siddharth Poshala
                </div>
                <div className="text-white whitespace-nowrap overflow-hidden animate-typing text-lg">
                  Front-End Developer and Java Programmer.
                </div>
              </h1>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://drive.google.com/file/d/1ednUnkAhjfaqnkUuBwKirFRVkVXmy_Z5/view?usp=drive_link"
                  rel="noopener"
                  target="_blank"
                  className=" resume-button block md:inline-block text-center md:text-left"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div>
            <h1 className="text-white mt-10">
              <div className="text-2xl">I am</div>
              <div className="text-6xl font-medium mb-3 mt-3">
                Siddharth Poshala
              </div>
              <div className="text-white whitespace-nowrap overflow-hidden animate-typing text-2xl">
                Front-End Developer and Java Programmer.
              </div>
            </h1>
            <a
              href="https://drive.google.com/file/d/1ednUnkAhjfaqnkUuBwKirFRVkVXmy_Z5/view?usp=drive_link"
              rel="noopener"
              target="_blank"
              className="resume-button"
            >
              Resume
            </a>
          </div>
          <div className="profile-container">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecA;
