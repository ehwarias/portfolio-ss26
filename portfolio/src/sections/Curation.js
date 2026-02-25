import React from 'react';

function Curation() {
  return (
    <section id="section-curation" className="page-section">
      <h1 className="page-title">Curation</h1>
      <p className="page-intro">A collection of the sounds, stories, and visuals that sharpen my intuition and define my cultural compass.</p>

      <div className="curation-section" id="music">
        <div className="curation-section-header">Music</div>

        <div className="curation-item">
          <div>
            <div className="curation-item-title">Sun Bleached Flies by Ethel Cain</div>
            <p className="curation-item-text">A manifesto for radical agency, finding the grace in active participation and the quiet power of accepting life's shifting terrain.</p>
          </div>
          <a href="https://open.spotify.com/track/6fKIyDJHZ9m84jRhSmpuwS?si=5884b8b0ec2b4e32" target="_blank" rel="noopener noreferrer">
            <img className="curation-item-img" src="/img/sunbleachedflies.png" alt="Sun Bleached Flies" />
          </a>
        </div>

        <div className="curation-item">
          <div>
            <div className="curation-item-title">Time to Pretend by MGMT</div>
            <p className="curation-item-text">The necessity of a "perfect pop song", where easy listening meets a communal feeling of angst and aspiration to create a shared, universal resonance.</p>
          </div>
          <a href="https://open.spotify.com/track/4iG2gAwKXsOcijVaVXzRPW?si=3607dded589e4468" target="_blank" rel="noopener noreferrer">
            <img className="curation-item-img" src="/img/timetopretend.jpg" alt="Time to Pretend" />
          </a>
        </div>

        <div className="curation-item">
          <div>
            <div className="curation-item-title">Hard Feelings / Loveless by Lorde</div>
            <p className="curation-item-text">A study of the beautifully difficult, using the symbolism of daily rituals to navigate raw emotion, self-love, and the courage required for self-recovery.</p>
          </div>
          <a href="https://open.spotify.com/track/3rA2qLWZl4r0RzMMJL7jZT" target="_blank" rel="noopener noreferrer">
            <img className="curation-item-img" src="/img/hardfeelings.jpg" alt="Hard Feelings" />
          </a>
        </div>
      </div>

      <div className="curation-section" id="imagery">
        <div className="curation-section-header">Imagery</div>
        <p className="curation-item-text">Visual references and inspirations coming soon.</p>
      </div>

      <div className="curation-section" id="books">
        <div className="curation-section-header">Books</div>
        <p className="curation-item-text">Literary influences and recommendations coming soon.</p>
      </div>
    </section>
  );
}

export default Curation;
