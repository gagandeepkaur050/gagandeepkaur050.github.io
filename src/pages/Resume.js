import React from 'react';

const Resume = () => (
  <section style={{
    padding: '40px',
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif'
  }}>
    <h2 style={{ color: '#004aad', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Resume</h2>

    {/* Professional Experience */}
    <div style={{ marginBottom: '30px' }}>
      <h3 style={{ color: '#222' }}>Software Developer – <span style={{ fontWeight: 'normal' }}>Grazitti Interactive</span></h3>
      <p style={{ color: '#777' }}>Panchkula, India | Jan 2019 – Dec 2024</p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Developed and deployed 15+ scalable web and mobile applications using React Native, Swift, Kotlin, and Python.</li>
        <li>Integrated REST APIs and services like HubSpot and Salesforce, reducing manual efforts by 40%.</li>
        <li>Improved project delivery timelines by 15% by adopting Agile/Scrum methodologies.</li>
        <li>Mentored junior developers and automated workflows, increasing team efficiency by 20%.</li>
        <li>Managed domains and FTP operations using GoDaddy and FileZilla.</li>
      </ul>
    </div>

    {/* Education */}
    <div style={{ marginBottom: '30px' }}>
      <h3 style={{ color: '#222' }}>Mobile Application Development and Strategy</h3>
      <p style={{ color: '#777' }}>George Brown College, Toronto, ON | Expected Aug 2025</p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Designed and developed native iOS/Android apps using Swift, Kotlin, and React Native.</li>
        <li>Applied UI/UX principles and Agile workflows to deliver responsive mobile solutions.</li>
        <li>Practiced testing, optimization, and deployment with industry-standard tools.</li>
      </ul>
    </div>

    <div style={{ marginBottom: '30px' }}>
      <h3 style={{ color: '#222' }}>Project Management</h3>
      <p style={{ color: '#777' }}>St. Lawrence College, Scarborough, ON | Jan 2024 – Aug 2024</p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Led and collaborated with project teams to execute plans efficiently.</li>
        <li>Utilized business intelligence tools to optimize project timelines and strategies.</li>
      </ul>
    </div>

    {/* Resume Download */}
    <a 
      href="/resume.pdf" 
      download 
      style={{
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#004aad',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}
    >
      📄 Download My Resume (PDF)
    </a>
  </section>
);

export default Resume;
