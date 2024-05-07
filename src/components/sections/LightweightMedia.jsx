// sections/LightweightMedia.jsx
import React from 'react';
import Lottie from 'react-lottie';
import lightweightMediaAnimation from '../../components/icons/lottie/lightweight-media.json';

const LightweightMedia = ({ animate }) => {
  const defaultOptions = {
    autoplay: false,
    loop: true,
    animationData: lightweightMediaAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="lightweight-media" className={`section mb-12 transition-opacity duration-1000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <h3 className="font-bold text-3xl mb-3 text-center text-gray-200">Letvægtsmedier</h3>
      <p className="text-lg mb-6 text-center text-gray-200">
        Ved at anvende moderne og effektive medieformater som Lottie-animationer og SVG-illustrationer frem for tunge PNG'er og WebMs, reducerer vi behovet for båndbredde og energiforbruget markant da tunge mediefiler kræver mere data og strøm for at blive indlæst og afspillet.
      </p>
      <div className="mx-auto my-6">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
};

export default LightweightMedia;
