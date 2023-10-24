/* eslint-disable react/jsx-no-target-blank */

import "./App.css";
import React from "react";

const SecC = ({ project }) => {
  return (
    <div className="s-projects" ref={project}>
      <div className="grid-layout">
        <h2>
          Projects <span>.</span>
        </h2>
        <div className="projects">
          <article>
            <h3>Lead Admin App</h3>
            <p>
              Developed a Lead Admin project with three roles (Lead, Admin,
              Agent) for problem submissions, assignments, and additional
              features. Utilized ReactJS, HTML, Tailwind for front-end, and
              Spring, Java, MongoDB for back-end to create a role-based Lead
              Admin system. Gained experience in full-stack development,
              role-based access control, and database management while
              strengthening problem-solving and project management skills
              through real-world collaboration
              <br />
              <a
                target="_blank"
                href="https://github.com/Siddharthposhala/MassmutualCasestudy.git"
              >
                Click here.
              </a>
              &nbsp; If you want to check.
            </p>
          </article>
          <article>
            <h3>Todo App</h3>
            <p>
              I developed a ToDo application using Node.js and JavaScript with
              user authentication for secure sign-in and sign-up. Users can add
              tasks with titles and dates, categorized as "Overdue," "Due
              Today," and "Due Later." Tasks can be marked complete and deleted.
              The app is deployed on Render for easy access and showcases my
              skills in web development and user-friendly design.
              <br />
              <a target="_blank" href="https://todoapp-e043.onrender.com">
                Click here.
              </a>
              &nbsp; If you want to visit.
            </p>
          </article>
          <article>
            <h3>Loan Prediction App</h3>
            <p>
              Presenting my Loan Prediction Android app, where users can access
              a welcoming interface, login, and sign up effortlessly. By
              providing their salary, collateral, and cibil score, the app
              predicts loan amounts from leading banks. Explore the code and
              project details on my GitHub repository. Experience the power of
              user-centric financial solutions through this app.
              <br />
              <a
                target="_blank"
                href="https://github.com/Siddharthposhala/LoanPredictionApp/raw/main/Loan%20Predictor.apk"
              >
                Click here.
              </a>
              &nbsp; If you want to download Apk file.
            </p>
          </article>
        </div>
        <a
          href="https://github.com/Siddharthposhala?tab=repositories"
          className="repo-button"
          target="_blank"
        >
          Repositories on GitHub
        </a>
      </div>
    </div>
  );
};

export default SecC;
