import React from 'react';

export default function Home() {
  return (
    <div>
      <img
        src="/portfolio.jpeg" 
        alt="Gagandeep Kaur"
        style={{ borderRadius: '50%', width: 150, height: 150, objectFit: 'cover', marginBottom: 20 }}
      />
      <h1>Gagandeep Kaur</h1>
      <p>Brampton, ON, Canada</p>
      <p>(437) 868-4050</p>
      <p>09gagandeep1996@gmail.com</p>

      <h2>Professional Summary</h2>
      <p>Results-driven Software Developer with 4+ years of experience in designing, developing, and deploying scalable web and mobile applications using Swift, Kotlin, Java, React Native, and Python. Skilled in API integration, cloud services, and CMS platforms like WordPress and HubSpot. Strong background in Agile methodologies, project management, and cross-functional team collaboration. Currently enhancing expertise through a Mobile Application Development Postgraduate Co-op program at George Brown College, Toronto.</p>
    </div>
  );
}
