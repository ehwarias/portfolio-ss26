import React from 'react';

function Values() {
  return (
    <section id="section-values" className="page-section">
      <h1 className="page-title">Values</h1>

      <div className="value-entry" id="trust">
        <div className="value-header">Trust</div>
        <p className="value-text">A commitment to radical transparency and "no-BS" communication, creating the psychological safety required for teams to navigate pain points honestly and innovate without fear.</p>
      </div>

      <div className="value-entry" id="empathy">
        <div className="value-header">Empathy</div>
        <p className="value-text">The recognition that everyone, from engineering to leadership to our customers, is navigating their own journey toward success, making it essential to honor our collective needs and support each other's growth.</p>
      </div>

      <div className="value-entry" id="autonomy">
        <div className="value-header">Autonomy</div>
        <p className="value-text">The conviction that growth happens at the edge of one's comfort zone, fueled by a seat at the table and the freedom to lead, fail, and contribute a unique perspective to complex challenges.</p>
      </div>
    </section>
  );
}

export default Values;
