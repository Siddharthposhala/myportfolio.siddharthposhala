/* eslint-disable react/jsx-no-target-blank */
import java from "./java.jpg";
import js from "./js.jpg";
import py from "./py.jpg";
import react from "./react.jpg";
import mysql from "./mysql.jpg";
import node from "./nodejs.jpg";
import html from "./html.jpg";
import css from "./css.jpg";
import and from "./android.jpg";
import "./App.css";
import React from "react";

const SecD = ({ skills }) => {
  return (
    <div className="s-skills" ref={skills}>
      <div className="grid-layout">
        <h2>
          Skills <span>.</span>
        </h2>
        <div className="skills">
          <article>
            <div className="flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={react} alt="deadpool" width="100px" height="100px" />
            </div>
            <br />
            <h4 className="text-center text-white">ReactJS</h4>
          </article>
          <article>
            <div className="flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={and} alt="deadpool" width="100px" height="100px" />
            </div>
            <br />
            <h4 className="text-center text-white">Andriod Development</h4>
          </article>
          <article>
            <div className="flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={java} alt="deadpool" width="100px" height="100px" />
            </div>
            <br />
            <h4 className="text-center text-white">Java</h4>
          </article>
          <article>
            <div className="flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={py} alt="deadpool" width="100px" height="100px" />
            </div>
            <br />
            <h4 className="text-center text-white">Python</h4>
          </article>
          <article>
            <div className="flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={js} alt="deadpool" width="100px" height="100px" />
            </div>
            <br />
            <h4 className="text-center text-white">JavaScript</h4>
          </article>
          <article>
            <div className="flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={mysql} alt="deadpool" width="100px" height="100px" />
            </div>
            <br />
            <h4 className="text-center text-white">MySQL</h4>
          </article>
          <article>
            <div className="flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={node} alt="deadpool" width="100px" height="100px" />
            </div>
            <br />
            <h4 className="text-center text-white">NodeJS</h4>
          </article>
          <article>
            <div className="flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={html} alt="deadpool" width="100px" height="100px" />
            </div>
            <br />
            <h4 className="text-center text-white">HTML</h4>
          </article>
          <article>
            <div className="flex justify-center items-center relative transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-110">
              <img src={css} alt="deadpool" width="100px" height="100px" />
            </div>
            <br />
            <h4 className="text-center text-white">CSS</h4>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SecD;
