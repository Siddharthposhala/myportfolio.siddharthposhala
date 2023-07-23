/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import profile from "./profile.jpg";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import about from "./about.png";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      {/* -------------------------NavBar---------------------------------------     */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h1 className="logo">Siddharth</h1>
          <h1 className="logo">Poshala</h1>
        </div>

        <div className="navbar-buttons">
          <button className="navbar-button">Who am I</button>
          {/* <button className="navbar-button">About</button> */}
          <button className="navbar-button">Projects</button>
          <button className="navbar-button">Contact</button>
        </div>
      </nav>
      {/* -------------------------Section - A---------------------------------------     */}
      <section id="s-home">
        <div className="grid-layout">
          <div id="home">
            <div id="home-container-text">
              <div className="profile-container">
                <div className="margin2">
                  <h1>
                    I am
                    <br />
                    <span id="home-name">Siddharth Poshala</span>
                    <br />
                    <span className="typewriter">
                      Front-end developer and Java Programmer
                    </span>
                  </h1>
                  <a
                    href="#"
                    rel="noopener"
                    target="_blank"
                    className="resume-button"
                  >
                    Resume
                  </a>
                </div>
                <div className="profile-pic">
                  <img src={profile} alt="Profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------Section - B---------------------------------------     */}
      <section id="s-about">
        <div class="grid-layout">
          <div id="about">
            <div id="about-photo">
              <img
                src={about}
                width="400px"
                height="400px"
                alt="illustration TechWithJoshi"
                id="photo-iuricode"
              />
              <div class="about-figure figure-one icon-one delayExtraBigReveal">
                <img src={html} width="45px" height="45px" alt="html" />
              </div>
              <div class="about-figure figure-two icon-two delayExtraBigReveal">
                <img src={css} width="45px" height="45px" alt="css" />
              </div>
              <div class="about-figure figure-three icon-three delayExtraBigReveal">
                <img src={js} width="45px" height="45px" alt="js" />
              </div>
            </div>
            <article id="about-text">
              <h2>
                Who am I<span>.</span>
              </h2>
              <p>
                My name is Siddharth Poshala, I was born and brought in
                warangal. I'm currently pursuing my graduation from vardhaman
                college of engineering specialized in computer science and
                engineering. I'm developing my skills in full stack development
                and I have good knowledge of Java and python.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------- */}

      <section id="s-projects">
        <div class="grid-layout">
          <h2>
            Projects <span>.</span>
          </h2>
          <div id="projects">
            <article>
              <h3>Portfolio</h3>
              <p>
                This Portfolio is created with ReactJS.
                <a href="https://portfoliov1-techwithjoshi.vercel.app/">
                  Click here
                </a>
                if you want to watch my ReactJS portfolio.
              </p>
            </article>

            <article>
              <h3>College static practical</h3>
              <p>
                <a href="/index2.html">Government Polytechnic College, Dahod</a>
              </p>
            </article>

            <article>
              <h3>Coming</h3>
              <p>Soon</p>
            </article>
          </div>
          <a href="#">Repositories on GitHub</a>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------------------------------------ */}

      <section id="s-skills">
        <div class="grid-layout">
          <div id="skills-text">
            <h2 class="delaySmallReveal">
              Knowledge <span>.</span>
            </h2>
            <p class="delayMediumReveal changeDescription">
              *mouse cursor over card to read*
            </p>
          </div>

          <div id="skills-cards">
            <article class="html intervalCardReveal">
              <span class="skills-cards-name-high">HTML</span>
              <img
                src="assets/icons/html.svg"
                width="60px"
                height="60px"
                alt="ícone do html"
                class="skills-icons"
              />
            </article>
            <article class="css intervalCardReveal">
              <span class="skills-cards-name-high">CSS</span>
              <img
                src="assets/icons/css.svg"
                width="60px"
                height="60px"
                alt="ícone do css"
                class="skills-icons"
              />
            </article>
            <article class="js intervalCardReveal">
              <span class="skills-cards-name-high">Javascript</span>
              <img
                src="assets/icons/js.svg"
                width="60px"
                height="60px"
                alt="ícone do javascript"
                class="skills-icons"
              />
            </article>
            <article class="sass intervalCardReveal">
              <span class="skills-cards-name-high">Sass</span>
              <img
                src="assets/icons/sass.svg"
                width="60px"
                height="60px"
                alt="ícone do sass"
                class="skills-icons"
              />
            </article>
            <article class="react intervalCardReveal">
              <span class="skills-cards-name-low">ReactJS</span>
              <img
                src="assets/icons/react.svg"
                width="60px"
                height="60px"
                alt="ícone do react"
                class="skills-icons"
              />
            </article>
            <article class="next intervalCardReveal">
              <span class="skills-cards-name-low">Next.js</span>
              <img
                src="assets/icons/next.svg"
                width="60px"
                height="60px"
                alt="ícone do next"
                class="skills-icons"
              />
            </article>
            <article class="styled intervalCardReveal">
              <span class="skills-cards-name-low aumento-hover">
                Styled Components
              </span>
              <img
                src="assets/icons/styled.svg"
                width="60px"
                height="60px"
                alt="ícone do styled"
                class="skills-icons"
              />
            </article>
            <article class="tailwind intervalCardReveal">
              <span class="skills-cards-name-low">Tailwind</span>
              <img
                src="assets/icons/tailwind.svg"
                width="60px"
                height="60px"
                alt="ícone do tailwind"
                class="skills-icons"
              />
            </article>
          </div>
        </div>
      </section>

      {/* -------------------------Footer---------------------------------------     */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h5 className="logo margin">DevelopedBy - </h5>
          <h5 className="logo">@SiddharthPoshala</h5>
        </div>
      </nav>
    </div>
  );
}

export default App;
