/* eslint-disable react/jsx-no-target-blank */
import about from "./about.png";
import "./App.css";
import React, { useState, useEffect } from "react";

const SecB = ({ whoiam }) => {
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
    <div className="s-about" ref={whoiam}>
      {isMobile ? (
        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className=" flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={about} alt="deadpool" width="500px" height="500px" />
            </div>
            <div className="w-60 md:w-full md:flex md:flex-col md:pl-0">
              <h2 className="pb-20 text-white text-5xl md:text-4.8xl font-medium">
                Who am I<span className="text-indigo-600 text-4.8xl">.</span>
              </h2>
              <p className="leading-8 text-gray-200 text-xl font-saira md:text-1.5xl mr-5">
                My name is Siddharth Poshala, I was born and brought in
                warangal. I'm currently pursuing my graduation from vardhaman
                college of engineering specialized in computer science and
                engineering. I'm developing my skills in full stack development
                and I have good knowledge of Java and python.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className=" flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={about} alt="deadpool" width="500px" height="500px" />
            </div>
            <div className="w-60 md:w-full md:flex md:flex-col md:pl-0">
              <h2 className="pb-20 text-white text-5xl md:text-4.8xl font-medium">
                Who am I<span className="text-indigo-600 text-4.8xl">.</span>
              </h2>
              <p className="leading-8 text-gray-200 text-xl font-saira md:text-1.5xl mr-20">
                My name is Siddharth Poshala, I was born and brought in
                warangal. I'm currently pursuing my graduation from vardhaman
                college of engineering specialized in computer science and
                engineering. I'm developing my skills in full stack development
                and I have good knowledge of Java and python.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecB;
