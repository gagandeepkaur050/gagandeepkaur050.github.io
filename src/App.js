import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import './App.css';  // Add this CSS file
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <header className="navbar">
        <img src="/logo1.png" alt="Gagandeep Logo" className="logo" />
        <nav>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? "active" : ""}>Education</NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? "active" : ""}>Resume</NavLink>

        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
