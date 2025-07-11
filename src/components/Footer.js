// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin,FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      color: '#333',
      textAlign: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <p>Thanks for visiting! Connect with me:</p>
      <div style={{ marginTop: '10px' }}>
        <a
          href="https://github.com/gagandeepkaur050"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px', color: '#333', fontSize: '1.5rem' }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gagandeep-kaur-688719182/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px', color: '#0e76a8', fontSize: '1.5rem' }}
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:09gagandeep1996@gmail.com"
          style={{ margin: '0 15px', color: '#d44638', fontSize: '1.5rem' }}
        >
          <FaEnvelope />
        </a>
      </div>
      <p style={{ fontSize: '14px', marginTop: '10px' }}>
        Email: <a href="mailto:09gagandeep1996@gmail.com" style={{ color: '#333' }}>09gagandeep1996@gmail.com</a>
      </p>
      <p style={{ fontSize: '14px', marginTop: '10px' }}>
        © {new Date().getFullYear()} Gagandeep Kaur | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
