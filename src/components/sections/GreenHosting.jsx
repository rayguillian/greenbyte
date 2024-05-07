// sections/GreenHosting.jsx
import React from 'react';
import Lottie from 'react-lottie';
import greenHostingAnimation from '../../components/icons/lottie/greenHosting.json';

const GreenHosting = ({ animate }) => {
  const defaultOptions = {
    autoplay: false,
    loop: true,
    animationData: greenHostingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="green-hosting" className={`section mb-12 transition-opacity duration-1000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <h3 className="font-bold text-3xl mb-3 text-center text-gray-200">Grøn hosting</h3>
      <p className="text-lg mb-6 text-center text-gray-200">
        Vores servers kommer fra bæredygtige kilder og kører kun på vedvarende energi, hvilket sparer miljøet betydeligt.
      </p>
        <p className="italic text-sm text-center text-gray-200">
        Fun fact: Internettet står for cirka 1,7 milliarder tons drivhusgasemissioner årligt, svarende til 414 kg CO2 pr. internetbruger.
      </p>
      <div className="mx-auto my-6">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
};

export default GreenHosting;
