import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gagandeep Kaur</h1>
        <p>Quality Assurance & Frontend Enthusiast</p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
          Download Resume
        </a>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I’m a motivated team player with experience in Quality Assurance, warehouse operations, and customer service. I'm currently building my portfolio while learning web development and React.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>FitBuddy App</strong> – Cross-platform fitness app with React Native + Firebase.
          </li>
          <li>
            <strong>Portfolio Site</strong> – Built using React, deployed with GitHub Pages.
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Email me at: <a href="mailto:gagandeep@example.com">gagandeep@example.com</a>
        </p>
      </section>
    </div>
  );
}

export default App;
