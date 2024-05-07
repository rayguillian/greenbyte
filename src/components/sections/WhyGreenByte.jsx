// WhyGreenByte.jsx
import React, { useState, useEffect, Suspense } from 'react';
import bgImage from '../../assets/images/gbbg.svg';

// Lazy load sections
const GreenHosting = React.lazy(() => import('../sections/GreenHosting'));
const EfficientCode = React.lazy(() => import('../sections/EfficientCode'));
const LightweightMedia = React.lazy(() => import('../sections/LightweightMedia'));
const DarkMode = React.lazy(() => import('../sections/DarkMode'));

const WhyGreenByte = () => {
  const [animateSection, setAnimateSection] = useState({
    mainTitle: false,
    hosting: false,
    code: false,
    media: false,
    darkMode: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // Main title visibility check
      const mainTitlePosition = document.getElementById('why-greenbyte-title').getBoundingClientRect().top + window.scrollY;
      if (scrollPosition > mainTitlePosition && !animateSection.mainTitle) {
        setAnimateSection(prev => ({ ...prev, mainTitle: true }));
      }

      const sections = [
        { id: 'green-hosting', key: 'hosting' },
        { id: 'efficient-code', key: 'code' },
        { id: 'lightweight-media', key: 'media' },
        { id: 'dark-mode-section', key: 'darkMode' }
      ];
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const position = element.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition > position && !animateSection[section.key]) {
            setAnimateSection(prev => ({ ...prev, [section.key]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateSection]);

  return (
    <section id="why-greenbyte" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="background-wrapper" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <img src={bgImage} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="container mx-auto px-4 py-12">
        <h2 id="why-greenbyte-title" className={`font-serif text-5xl text-gray-200 mb-12 text-center transition-opacity duration-1000 ${animateSection.mainTitle ? 'opacity-100' : 'opacity-0'}`} style={{ marginTop: '100px' }}>
          Hvorfor Greenbyte?
        </h2>
        <Suspense fallback={<div>Loading...</div>}>
          <GreenHosting animate={animateSection.hosting} />
          <EfficientCode animate={animateSection.code} />
          <LightweightMedia animate={animateSection.media} />
          <DarkMode animate={animateSection.darkMode} />
        </Suspense>
      </div>
    </section>
  );
};

export default WhyGreenByte;
