import React from 'react';

function Navigation({ activeSection, scrollToSection }) {
  const isActive = (section) => activeSection === section;

  return (
    <nav>
      <div className={`nav-section ${isActive('home') ? 'active' : ''}`}>
        <div className="nav-section-header" onClick={() => scrollToSection('section-home')}>
          <div className="nav-indicator"></div>
          <span>Home</span>
        </div>
      </div>

      <div className={`nav-section ${isActive('product') ? 'active' : ''}`}>
        <div className="nav-section-header" onClick={() => scrollToSection('section-product')}>
          <div className="nav-indicator"></div>
          <span>Product</span>
        </div>
        <div className="nav-sub-items">
          <div className="nav-sub-item" onClick={() => scrollToSection('ssense')}>SSENSE</div>
          <div className="nav-sub-item" onClick={() => scrollToSection('canada-goose')}>Canada Goose</div>
          <div className="nav-sub-item" onClick={() => scrollToSection('mosaic-marketing')}>Mosaic Marketing</div>
          <div className="nav-sub-item" onClick={() => scrollToSection('metrolinx')}>Metrolinx</div>
          <div className="nav-sub-item" onClick={() => scrollToSection('starbucks')}>Starbucks</div>
        </div>
      </div>

      <div className={`nav-section ${isActive('values') ? 'active' : ''}`}>
        <div className="nav-section-header" onClick={() => scrollToSection('section-values')}>
          <div className="nav-indicator"></div>
          <span>Values</span>
        </div>
        <div className="nav-sub-items">
          <div className="nav-sub-item" onClick={() => scrollToSection('trust')}>Trust</div>
          <div className="nav-sub-item" onClick={() => scrollToSection('empathy')}>Empathy</div>
          <div className="nav-sub-item" onClick={() => scrollToSection('autonomy')}>Autonomy</div>
        </div>
      </div>

      <div className={`nav-section ${isActive('curation') ? 'active' : ''}`}>
        <div className="nav-section-header" onClick={() => scrollToSection('section-curation')}>
          <div className="nav-indicator"></div>
          <span>Curation</span>
        </div>
        <div className="nav-sub-items">
          <div className="nav-sub-item" onClick={() => scrollToSection('music')}>Music</div>
          <div className="nav-sub-item" onClick={() => scrollToSection('imagery')}>Imagery</div>
          <div className="nav-sub-item" onClick={() => scrollToSection('books')}>Books</div>
        </div>
      </div>

      <div className={`nav-section ${isActive('studio') ? 'active' : ''}`}>
        <div className="nav-section-header" onClick={() => scrollToSection('section-studio')}>
          <div className="nav-indicator"></div>
          <span>Studio</span>
        </div>
        <div className="nav-sub-items">
          <div className="nav-sub-item" onClick={() => scrollToSection('section-studio')}>Photography</div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
