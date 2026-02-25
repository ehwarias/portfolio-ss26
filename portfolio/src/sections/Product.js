import React from 'react';
import Accordion from '../components/Accordion';

function Product() {
  return (
    <section id="section-product" className="page-section">
      <h1 className="page-title">Product</h1>
      <p className="page-intro">A portfolio of work defined by decisive strategy and the belief that the best products are built at the intersection of logic and human insight.</p>

      <div className="product-entry" id="ssense">
        <div className="product-entry-header">SSENSE</div>
        <p className="product-description">An environment defined by autonomy, where I grew from Associate to Senior lead, managing a high-impact portfolio across the core commerce engine.</p>
        <p className="product-tagline">Cultivating radical trust and transparency to unlock cross-functional velocity; obsessing over the "So what?" to ensure every feature translates into a measurable strategy.</p>
        <Accordion label="Key Contributions">
          <ul className="product-bullets">
            <li><strong>0-to-1 Catalog Transformation:</strong> Led the foundational build of proprietary Catalog and PIM technology to modernize product data management.</li>
            <li><strong>Strategic Fulfillment Integration:</strong> Orchestrated complex integrations with third-party vendors for high-value projects exceeding $70M+.</li>
            <li><strong>Recovery Revenue Stream Enablement:</strong> Identified and scaled a strategic product-market fit for damaged-inventory, turning a logistical challenge into a viable revenue stream.</li>
            <li><strong>Architectural Scaling:</strong> Spearheaded the technical simplification of stock services to maintain stability at over 120k RPS.</li>
          </ul>
        </Accordion>
      </div>

      <div className="product-entry" id="canada-goose">
        <div className="product-entry-header">Canada Goose</div>
        <p className="product-description">A space for experimentation and innovation, fostering a culture where raw ideas were transformed into supported, innovative customer solutions.</p>
        <p className="product-tagline">Building a "world-building" brand through seamless technology; recognizing that every touchpoint is an opportunity to foster loyalty and community.</p>
        <Accordion label="Key Contributions">
          <ul className="product-bullets">
            <li><strong>Omnichannel Strategy:</strong> Refined the interplay between touchpoints to ensure a seamless, "world-building" brand presence.</li>
            <li><strong>Data-Driven UX:</strong> Leveraged a synthesis of qualitative and quantitative insights to bridge the gap between digital and physical luxury experiences.</li>
          </ul>
        </Accordion>
      </div>

      <div className="product-entry" id="mosaic-marketing">
        <div className="product-entry-header">Mosaic Marketing</div>
        <p className="product-description">A period of rapid learning and consulting, focused on navigating the pandemic-era digital shift for specialized small businesses.</p>
        <p className="product-tagline">Embracing the nuance of every client; understanding that "intuitive design" must adapt to the specific vision and audience of the brand.</p>
        <Accordion label="Key Contributions">
          <ul className="product-bullets">
            <li><strong>Adaptive Design:</strong> Designed and launched tailored eCommerce environments for 30+ clients across Shopify, Squarespace, and Square with unique cultural and strategic backgrounds.</li>
          </ul>
        </Accordion>
      </div>

      <div className="product-entry" id="metrolinx">
        <div className="product-entry-header">Metrolinx</div>
        <p className="product-description">Project Management Internship focused on delivering spatial data infrastructure for real-time tracking across major transit projects.</p>
      </div>

      <div className="product-entry" id="starbucks">
        <div className="product-entry-header">Starbucks</div>
        <p className="product-description">Early-career role focused on customer experience, operational excellence, and team coordination in a high-volume environment.</p>
      </div>
    </section>
  );
}

export default Product;
