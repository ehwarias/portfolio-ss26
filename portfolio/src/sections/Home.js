import React from 'react';

function Home() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Andrew_Warias_Resume.pdf';
    link.download = 'Andrew_Warias_CV.pdf';
    link.click();
  };

  return (
    <section id="section-home" className="page-section">
      <h1 className="home-title">Andrew Warias</h1>
      <div className="home-subtitle">
        Senior Product Manager @ SSENSE<br />
        Toronto, Canada
      </div>
      <div className="home-text">
        INTERSECTING TECHNICAL AND DATA STRATEGY WITH <i>LUXURY</i> INTUITION AND A CULTURAL EDGE.
      </div>
      <div className="home-links">
        <a onClick={downloadCV}>CV</a>
        <a href="mailto:andrewwarias98@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/andrew-warias/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Home;
