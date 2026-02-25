import React, { useState, useRef } from 'react';

function Accordion({ label, children }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  return (
    <div className={`accordion ${open ? 'accordion--open' : ''}`}>
      <button className="accordion-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{label}</span>
        <span className="accordion-icon">{open ? '−' : '+'}</span>
      </button>
      <div
        className="accordion-body"
        style={{ maxHeight: open ? bodyRef.current?.scrollHeight + 'px' : '0px' }}
        ref={bodyRef}
      >
        <div className="accordion-body-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
