import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (!main) return;

    const handleScroll = () => {
      // Find which section is currently most visible
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(`section-${id}`);
        if (!el) continue;
        // If the section top is above the midpoint of the viewport, mark it active
        if (el.offsetTop - main.scrollTop <= main.clientHeight / 2) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    main.addEventListener('scroll', handleScroll, { passive: true });
    return () => main.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
