// sections/DarkMode.jsx
import React from 'react';
import Lottie from 'react-lottie';
import darkModeAnimation from '../../components/icons/lottie/dark-mode.json';

const DarkMode = ({ animate }) => {
  const defaultOptions = {
    autoplay: false,
    loop: true,
    animationData: darkModeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="dark-mode-section" className={`section mb-12 transition-opacity duration-1000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <h3 className="font-bold text-3xl mb-3 text-center text-gray-200">Dark Mode</h3>
      <p className="text-lg mb-6 text-center text-gray-200">
        Vi implementerer "dark mode" på din hjemmeside og reducerer energiforbruget på enheder med OLED- og AMOLED-skærme, da mørkere skærme kræver mindre strøm. Dette bidrager til længere batterilevetid og mindre miljøpåvirkning.
      </p>
      <div className="mx-auto my-6">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
};

export default DarkMode;
