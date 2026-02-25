import React, { useState } from 'react';

function Studio() {
  const [expandedId, setExpandedId] = useState(null);

  const photoFiles = [
    'IMG_1591.JPG', 'IMG_1583.JPG', 'IMG_1586.JPG', 'IMG_1577.JPG',
    'IMG_1579.JPG', 'IMG_1585.JPG', 'IMG_1589.JPG', 'IMG_1580.JPG',
    'IMG_1576.JPG', 'IMG_1582.JPG', 'IMG_1584.JPG', 'IMG_1587.JPG',
    'IMG_1590.JPG', 'IMG_1592.JPG',
  ];

  const toggleImage = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="section-studio" className="page-section">
      <h1 className="page-title">Studio</h1>
      <p className="page-intro">Photography and visual work.</p>

      <div className="studio-grid">
        {photoFiles.map((fileName, index) => (
          <div
            key={index}
            className={`studio-img-wrapper ${expandedId === index ? 'expanded' : ''}`}
            onClick={() => toggleImage(index)}
          >
            <img
              src={`/img/${fileName}`}
              alt={`Studio Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Studio;
